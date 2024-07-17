const courseStudentService = require('../services/courseStudentService');

const enrollStudentInCourse = async (req, res) => {
  const { courseId } = req.body;

  try {
      const date = new Date();
      const enrollment = await courseStudentService.enrollInCourse(courseId, req.user.id, date);
      res.status(201).json(enrollment);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

const getAllCourseEnrollments = async (req, res) => {
  try {
      const courses = await courseStudentService.getStudentCourses(req.user.id);
      res.status(200).json(courses);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

const updateCourseEnrollment = async (req, res) => {
  const { course_id } = req.params;
  const courseStudentData = req.body;

  try {
    const updatedEnrollment = await courseStudentService.updateCourseEnrollment(req.user.id, course_id, courseStudentData);
    res.status(200).json(updatedEnrollment);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deleteCourseEnrollment = async (req, res) => {
  const { course_id } = req.params;

  try {
    await courseStudentService.deleteCourseEnrollment(req.user.id, course_id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  enrollStudentInCourse,
  getAllCourseEnrollments,
  updateCourseEnrollment,
  deleteCourseEnrollment
};
