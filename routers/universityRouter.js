const express = require('express');
const {createUniversity, getAllUniversity, getUniversityById, getUniversityProfile, updateUniversity, deleteUniversity,} = require('../controllers/universityControllers');
const { authenticateToken, authorizeRole } = require('../middleware/auth');
const upload = require('../middleware/upload');


const router = express.Router();

router.get('/university', getAllUniversity);
router.get('/university/:id', getUniversityById);
router.post('/university', upload.single('logo'), createUniversity);
router.get('/profileUni', authenticateToken, authorizeRole('admin'), getUniversityProfile);
router.put('/university/:id', upload.single('logo'), authenticateToken, authorizeRole('admin'), updateUniversity);
router.delete('/university/:id', authenticateToken, authorizeRole('admin'), deleteUniversity);

module.exports = router;
