const express = require('express');
const {createDegree, getDegrees, getDegreeById, updateDegree, deleteDegree} = require('../controllers/degreeControllers');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

const router = express.Router();

router.post('/degree', authenticateToken, authorizeRole('university'), createDegree);
router.get('/degree', getDegrees);
router.get('/degree/:id', getDegreeById);
router.put('/degree/:id', authenticateToken, authorizeRole(['university']), updateDegree);
router.delete('/degree/:id', authenticateToken, authorizeRole(['university']), deleteDegree);

module.exports = router;
