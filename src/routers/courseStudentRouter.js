const express = require('express');
const {enrollStudentInCourse, getAllCourseEnrollments, updateCourseEnrollment , deleteCourseEnrollment} = require('../controllers/courseStudentControllers');
const { authenticateToken, authorizeRole } = require('../middleware/auth');


const router = express.Router();

router.post('/',  authenticateToken, authorizeRole(['student']), enrollStudentInCourse);
router.get('/',  authenticateToken, authorizeRole(['student']), getAllCourseEnrollments);
router.put('/:course_id', authenticateToken, authorizeRole(['student']), updateCourseEnrollment);
router.delete('/:course_id', authenticateToken, authorizeRole(['student']), deleteCourseEnrollment);

module.exports = router;
