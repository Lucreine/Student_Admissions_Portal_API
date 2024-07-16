const CourseStudent = require('../models/courseStudentModels');
const Student = require('../models/studentsModels');
const Course = require('../models/coursesModels');

const enrollStudentInCourse = async (courseStudentData) => {
  return await CourseStudent.create(courseStudentData);
};

const getAllCourseEnrollments = async () => {
  return await CourseStudent.findAll({
    include: [
      { model: Student, as: 'students' },
      { model: Course, as: 'courses' }
    ]
  });
};

const getCourseEnrollmentById = async (student_id, course_id) => {
  return await CourseStudent.findOne({
    where: { student_id, course_id },
    include: [
      { model: Student, as: 'students' },
      { model: Course, as: 'courses' }
    ]
  });
};

const updateCourseEnrollment = async (student_id, course_id, courseStudentData) => {
  const courseStudent = await CourseStudent.findOne({
    where: { student_id, course_id }
  });
  if (!courseStudent) {
    throw new Error('Course enrollment not found');
  }
  return await courseStudent.update(courseStudentData);
};

const deleteCourseEnrollment = async (student_id, course_id) => {
  const courseStudent = await CourseStudent.findOne({
    where: { student_id, course_id }
  });
  if (!courseStudent) {
    throw new Error('Course enrollment not found');
  }
  await courseStudent.destroy();
};

module.exports = {
  enrollStudentInCourse,
  getAllCourseEnrollments,
  getCourseEnrollmentById,
  updateCourseEnrollment,
  deleteCourseEnrollment
};
