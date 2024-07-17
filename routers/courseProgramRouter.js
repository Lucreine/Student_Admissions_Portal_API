const express = require('express');
const { createCourseProgram, getCoursePrograms, deleteCourseProgram } = require('../controllers/courseProgramControllers');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

const router = express.Router();

router.post('/course-program', authenticateToken, authorizeRole('admin'), createCourseProgram);
router.get('/courses/:course_id/programs', authenticateToken, authorizeRole(['admin', 'student']), getCoursePrograms);
router.delete('/courses/:course_id/programs/:program_id', authenticateToken, authorizeRole('admin'), deleteCourseProgram);

module.exports = router;
