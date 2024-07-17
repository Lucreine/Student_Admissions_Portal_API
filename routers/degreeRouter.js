const express = require('express');
const {createDegree, getDegrees, getDegreeById, updateDegree, deleteDegree} = require('../controllers/degreeControllers');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

const router = express.Router();

router.post('/degree', authenticateToken, authorizeRole('admin'), createDegree);
router.get('/degree', getDegrees);
router.get('/degree/:id', getDegreeById);
router.put('/degree/:id', authenticateToken, authorizeRole('admin'), updateDegree);
router.delete('/degree/:id', authenticateToken, authorizeRole('admin'), deleteDegree);

module.exports = router;
