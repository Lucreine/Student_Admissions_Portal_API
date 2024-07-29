const express = require('express');
const { createCourseProgram, getCoursePrograms, deleteCourseProgram } = require('../controllers/courseProgramControllers');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

const router = express.Router();

router.post('/', authenticateToken, authorizeRole('admin'), createCourseProgram);
router.get('/:course_id/programs', authenticateToken, authorizeRole(['admin', 'student']), getCoursePrograms);
router.delete('/:course_id/programs/:program_id', authenticateToken, authorizeRole('admin'), deleteCourseProgram);

module.exports = router;
