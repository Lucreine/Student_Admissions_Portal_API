const express = require('express');
const router = express.Router();
const {createProgramDegree, getProgramDegreeById, getAllProgramDegrees, deleteProgramDegree} = require('../controllers/programDegreeControllers');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

router.post('/programDegree', authenticateToken, authorizeRole('university'), createProgramDegree);
router.get('/programDegree/:program_id/:degree_id',getProgramDegreeById);
router.get('/programDegree', getAllProgramDegrees);
router.delete('/programDegree/:program_id/:degree_id', authenticateToken, authorizeRole('university'), deleteProgramDegree);

module.exports = router;
