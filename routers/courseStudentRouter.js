const express = require('express');
const courseStudentController = require('../controllers/courseStudentControllers');

const router = express.Router();

router.post('/course-students', courseStudentController.enrollStudentInCourse);
router.get('/course-students', courseStudentController.getAllCourseEnrollments);
router.get('/course-students/:student_id/:course_id', courseStudentController.getCourseEnrollmentById);
router.put('/course-students/:student_id/:course_id', courseStudentController.updateCourseEnrollment);
router.delete('/course-students/:student_id/:course_id', courseStudentController.deleteCourseEnrollment);

module.exports = router;
