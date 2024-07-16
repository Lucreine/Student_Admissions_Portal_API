const CourseProgram = require('../models/courseProgramModels');

const createCourseProgram = async (courseProgramData) => {
  return await CourseProgram.create(courseProgramData);
};

const getCourseProgramById = async (course_id, program_id) => {
  return await CourseProgram.findOne({ where: { course_id, program_id } });
};

const getAllCoursePrograms = async () => {
  return await CourseProgram.findAll();
};

const deleteCourseProgram = async (course_id, program_id) => {
  const courseProgram = await CourseProgram.findOne({ where: { course_id, program_id } });
  if (!courseProgram) {
    throw new Error('CourseProgram not found');
  }
  await courseProgram.destroy();
  return { message: 'CourseProgram deleted successfully' };
};

module.exports = {
  createCourseProgram,
  getCourseProgramById,
  getAllCoursePrograms,
  deleteCourseProgram,
};
