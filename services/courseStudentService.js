const courseStudentModels = require('../models/courseStudentModels');
const studentsModels = require('../models/studentsModels');
const courseModels = require('../models/coursesModels');


const enrollStudentInCourse = async (course_id, student_id, date) => {
  const enrollment = await courseStudentModels.create({ course_id: course_id, student_id: student_id, date });
  return enrollment;
};


const getAllCourseEnrollments = async (student_id) => {
  const student = await studentsModels.findByPk(student_id, {
    include: [
      { model: courseModels, as: 'courses' }
    ]
  });

  if (!student) {
    throw new Error('Student not found');
  }

  return student.courses;
};

const updateCourseEnrollment = async (student_id, course_id, courseStudentData) => {
  const courseStudent = await courseStudentModels.findOne({
    where: { student_id, course_id }
  });
  if (!courseStudent) {
    throw new Error('Course enrollment not found');
  }
  return await courseStudent.update(courseStudentData);
};

const deleteCourseEnrollment = async (student_id, course_id) => {
  const courseStudent = await courseStudentModels.findOne({
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
  updateCourseEnrollment,
  deleteCourseEnrollment
};
