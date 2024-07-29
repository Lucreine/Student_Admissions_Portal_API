const courseProgramService = require('../services/courseProgramService');

const createCourseProgram = async (req, res) => {
    const { course_id, program_id } = req.body;

    try {
        const result = await courseProgramService.createCourseProgram(course_id, program_id);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCoursePrograms = async (req, res) => {
    const { course_id } = req.params;

    try {
        const programs = await courseProgramService.getCoursePrograms(course_id);
        res.status(200).json(programs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCourseProgram = async (req, res) => {
    const { course_id, program_id } = req.params;

    try {
        const result = await courseProgramService.deleteCourseProgram(course_id, program_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createCourseProgram,
    getCoursePrograms,
    deleteCourseProgram
};
