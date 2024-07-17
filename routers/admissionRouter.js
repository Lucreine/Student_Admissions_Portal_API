const express = require('express');
const {createAdmission, getAllAdmissions, getAdmissionById, updateAdmissionStatus} = require('../controllers/admissionControllers');
const upload = require('../middleware/upload');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

const router = express.Router();

router.post('/admissions', authenticateToken, authorizeRole('student'), upload.single('card'), createAdmission);
router.get('/admissions', authenticateToken, authorizeRole(['admin']), getAllAdmissions);
router.get('/admissions/:id', authenticateToken, authorizeRole(['admin', 'student']), getAdmissionById);
router.put('/admissions/:id/status', authenticateToken, authorizeRole(['admin']), updateAdmissionStatus);


module.exports = router;
