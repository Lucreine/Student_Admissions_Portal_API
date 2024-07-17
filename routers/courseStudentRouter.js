const express = require('express');
const {enrollStudentInCourse, getAllCourseEnrollments, updateCourseEnrollment , deleteCourseEnrollment} = require('../controllers/courseStudentControllers');
const { authenticateToken, authorizeRole } = require('../middleware/auth');


const router = express.Router();

router.post('/course-students',  authenticateToken, authorizeRole(['student']), enrollStudentInCourse);
router.get('/course-students',  authenticateToken, authorizeRole(['student']), getAllCourseEnrollments);
router.put('/course-student/:course_id', authenticateToken, authorizeRole(['student']), updateCourseEnrollment);
router.delete('/course-student/:course_id', authenticateToken, authorizeRole(['student']), deleteCourseEnrollment);

module.exports = router;
