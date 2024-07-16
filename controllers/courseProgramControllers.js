const courseProgramService = require('../services/courseProgramService');

const createCourseProgram = async (req, res) => {
  try {
    const courseProgramData = req.body;
    const courseProgram = await courseProgramService.createCourseProgram(courseProgramData);
    res.status(201).json(courseProgram);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCourseProgramById = async (req, res) => {
  try {
    const { course_id, program_id } = req.params;
    const courseProgram = await courseProgramService.getCourseProgramById(course_id, program_id);
    if (!courseProgram) {
      res.status(404).json({ error: 'CourseProgram not found' });
    } else {
      res.status(200).json(courseProgram);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllCoursePrograms = async (req, res) => {
  try {
    const coursePrograms = await courseProgramService.getAllCoursePrograms();
    res.status(200).json(coursePrograms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCourseProgram = async (req, res) => {
  try {
    const { course_id, program_id } = req.params;
    const result = await courseProgramService.deleteCourseProgram(course_id, program_id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCourseProgram,
  getCourseProgramById,
  getAllCoursePrograms,
  deleteCourseProgram,
};
