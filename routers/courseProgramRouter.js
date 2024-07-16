const express = require('express');
const router = express.Router();
const {createCourseProgram, getCourseProgramById, getAllCoursePrograms, deleteCourseProgram} = require('../controllers/courseProgramControllers');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

router.post('/courseProgram', authenticateToken, authorizeRole('university'), createCourseProgram);
router.get('/courseProgram/:course_id/:program_id', authenticateToken, authorizeRole('university'), getCourseProgramById);
router.get('/courseProgram', authenticateToken, authorizeRole('university'), getAllCoursePrograms);
router.delete('/courseProgram/:course_id/:program_id', authenticateToken, authorizeRole('university'), deleteCourseProgram);

module.exports = router;
