const express = require('express');
const router = express.Router();
const { createProgramDegree, getProgramDegrees, deleteProgramDegree } = require('../controllers/programDegreeControllers');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

router.post('/', authenticateToken, authorizeRole('admin'), createProgramDegree);
router.get('/:program_id/degrees', authenticateToken, authorizeRole(['admin', 'student']), getProgramDegrees);
router.delete('/:program_id/degrees/:degree_id', authenticateToken, authorizeRole('admin'), deleteProgramDegree);

module.exports = router;
