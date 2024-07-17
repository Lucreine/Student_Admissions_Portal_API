const coursesModels = require('../models/coursesModels');
const universityModels = require('../models/universityModels');

const createCourse = async (courseData, userId) => {
  const university = await universityModels.findOne({ where: { userId } });
    if (!university) {
        throw new Error('University not found for the connected user');
    }

    const course = await coursesModels.create({ ...courseData, university_id: university.id });
    return course;
  };

const getCourses = async () => {
    return await coursesModels.findAll({ include: ['university', 'degree'] });
  };


const getCourseById = async (id) => {
    return await coursesModels.findByPk(id, { include: ['university', 'degree'] });
  };
  
const updateCourse = async (id, courseData) => {
    const course = await coursesModels.findByPk(id);
    if (!course) {
      throw new Error('Course not found');
    }
    await course.update(courseData);
    return course;
  };

const deleteCourse = async (id) => {
    const course = await coursesModels.findByPk(id);
    if (!course) {
      throw new Error('Course not found');
    }
    await course.destroy();
  };


module.exports = { 
    createCourse,
    getCourses, 
    getCourseById,
    updateCourse,
    deleteCourse
};