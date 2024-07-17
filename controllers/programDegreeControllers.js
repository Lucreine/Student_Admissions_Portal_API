const programDegreeService = require('../services/programDegreeService');

const createProgramDegree = async (req, res) => {
    const { program_id, degree_id } = req.body;

    try {
        const result = await programDegreeService.createProgramDegree(program_id, degree_id);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProgramDegrees = async (req, res) => {
    const { program_id } = req.params;

    try {
        const degrees = await programDegreeService.getProgramDegrees(program_id);
        res.status(200).json(degrees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteProgramDegree = async (req, res) => {
    const { program_id, degree_id } = req.params;

    try {
        const result = await programDegreeService.deleteProgramDegree(program_id, degree_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createProgramDegree,
    getProgramDegrees,
    deleteProgramDegree
};
