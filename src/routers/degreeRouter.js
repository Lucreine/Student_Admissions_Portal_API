const express = require('express');
const {createDegree, getDegrees, getDegreeById, updateDegree, deleteDegree} = require('../controllers/degreeControllers');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

const router = express.Router();

router.post('/', authenticateToken, authorizeRole('admin'), createDegree);
router.get('/', getDegrees);
router.get('/:id', getDegreeById);
router.put('/:id', authenticateToken, authorizeRole('admin'), updateDegree);
router.delete('/:id', authenticateToken, authorizeRole('admin'), deleteDegree);

module.exports = router;
