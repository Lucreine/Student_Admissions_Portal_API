const express = require('express');
const router = express.Router();
const {createProgram, getProgramById, getAllPrograms, updateProgram, deleteProgram} = require('../controllers/programControllers');
const { authenticateToken, authorizeRole } = require('../middleware/auth');


router.post('/', authenticateToken, authorizeRole('admin'), createProgram);
router.get('/:id', getProgramById);
router.get('/', authenticateToken, authorizeRole('admin'), getAllPrograms);
router.put('/:id', authenticateToken, authorizeRole('admin'), updateProgram);
router.delete('/:id', authenticateToken, authorizeRole('admin'), deleteProgram);

module.exports = router;
