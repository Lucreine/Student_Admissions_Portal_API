const express = require('express');
const {createUniversity, getAllUniversity, getUniversityById, updateUniversity, deleteUniversity,} = require('../controllers/universityControllers');
const { authenticateToken, authorizeRole } = require('../middleware/auth');


const router = express.Router();

router.get('/university', getAllUniversity);
router.get('/university/:id', getUniversityById);
router.post('/university',authenticateToken, authorizeRole('university'), createUniversity);
router.put('/university/:id', updateUniversity);
router.delete('/university/:id', deleteUniversity);

module.exports = router;
