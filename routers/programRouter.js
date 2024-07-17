const express = require('express');
const router = express.Router();
const {createProgram, getProgramById, getAllPrograms, updateProgram, deleteProgram} = require('../controllers/programControllers');
const { authenticateToken, authorizeRole } = require('../middleware/auth');


router.post('/program', authenticateToken, authorizeRole('admin'), createProgram);
router.get('/program/:id', getProgramById);
router.get('/program', authenticateToken, authorizeRole('admin'), getAllPrograms);
router.put('/program/:id', authenticateToken, authorizeRole('admin'), updateProgram);
router.delete('/program/:id', authenticateToken, authorizeRole('admin'), deleteProgram);

module.exports = router;
