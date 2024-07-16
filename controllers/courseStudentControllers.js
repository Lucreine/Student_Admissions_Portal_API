const courseStudentService = require('../services/courseStudentService');

const enrollStudentInCourse = async (req, res) => {
  try {
    const courseStudentData = req.body;
    const enrollment = await courseStudentService.enrollStudentInCourse(courseStudentData);
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllCourseEnrollments = async (req, res) => {
  try {
    const enrollments = await courseStudentService.getAllCourseEnrollments();
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCourseEnrollmentById = async (req, res) => {
  try {
    const { student_id, course_id } = req.params;
    const enrollment = await courseStudentService.getCourseEnrollmentById(student_id, course_id);
    if (!enrollment) {
      res.status(404).json({ error: 'Course enrollment not found' });
    } else {
      res.status(200).json(enrollment);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCourseEnrollment = async (req, res) => {
  try {
    const { student_id, course_id } = req.params;
    const courseStudentData = req.body;
    const updatedEnrollment = await courseStudentService.updateCourseEnrollment(student_id, course_id, courseStudentData);
    res.status(200).json(updatedEnrollment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCourseEnrollment = async (req, res) => {
  try {
    const { student_id, course_id } = req.params;
    await courseStudentService.deleteCourseEnrollment(student_id, course_id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  enrollStudentInCourse,
  getAllCourseEnrollments,
  getCourseEnrollmentById,
  updateCourseEnrollment,
  deleteCourseEnrollment
};
