const express = require('express');
const {createAdmission, getAllAdmissions, getAdmissionById, updateAdmission, deleteAdmission} = require('../controllers/admissionControllers');

const router = express.Router();

router.post('/admissions', createAdmission);
router.get('/admissions', getAllAdmissions);
router.get('/admissions/:id', getAdmissionById);
router.put('/admissions/:id', updateAdmission);
router.delete('/admissions/:id', deleteAdmission);

module.exports = router;
