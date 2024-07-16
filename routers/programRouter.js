const express = require('express');
const router = express.Router();
const {createProgram, getProgramById, getAllPrograms, updateProgram, deleteProgram} = require('../controllers/programControllers');
const { authenticateToken, authorizeRole } = require('../middleware/auth');


router.post('/program', authenticateToken, authorizeRole('university'), createProgram);
router.get('/program/:id', getProgramById);
router.get('/program', authenticateToken, authorizeRole('university'), getAllPrograms);
router.put('/program/:id', authenticateToken, authorizeRole('university'), updateProgram);
router.delete('/program/:id', authenticateToken, authorizeRole('university'), deleteProgram);

module.exports = router;