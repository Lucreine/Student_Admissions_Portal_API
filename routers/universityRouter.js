const express = require('express');
const {createUniversity, getAllUniversity, getUniversityById, getUniversityProfile, updateUniversity, deleteUniversity,} = require('../controllers/universityControllers');
const { authenticateToken, authorizeRole } = require('../middleware/auth');


const router = express.Router();

router.get('/university', getAllUniversity);
router.get('/university/:id', getUniversityById);
router.post('/university', createUniversity);
router.get('/profileUni', authenticateToken, authorizeRole('university'), getUniversityProfile);
router.put('/university/:id', authenticateToken, authorizeRole('university'), updateUniversity);
router.delete('/university/:id', authenticateToken, authorizeRole('university'), deleteUniversity);

module.exports = router;
