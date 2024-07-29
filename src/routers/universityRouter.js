const express = require('express');
const {createUniversity, getAllUniversity, getUniversityById, getUniversityProfile, updateUniversity, deleteUniversity,} = require('../controllers/universityControllers');
const { authenticateToken, authorizeRole } = require('../middleware/auth');
const upload = require('../middleware/upload');


const router = express.Router();

router.get('/', getAllUniversity);
router.get('/:id', getUniversityById);
router.post('/', upload.single('logo'), createUniversity);
router.get('/profileUni', authenticateToken, authorizeRole('admin'), getUniversityProfile);
router.put('/:id', upload.single('logo'), authenticateToken, authorizeRole('admin'), updateUniversity);
router.delete('/:id', authenticateToken, authorizeRole('admin'), deleteUniversity);

module.exports = router;
