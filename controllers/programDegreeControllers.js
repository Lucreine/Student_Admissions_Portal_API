const programDegreeService = require('../services/programDegreeService');

const createProgramDegree = async (req, res) => {
  try {
    const programDegreeData = req.body;
    const programDegree = await programDegreeService.createProgramDegree(programDegreeData);
    res.status(201).json(programDegree);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProgramDegreeById = async (req, res) => {
  try {
    const { program_id, degree_id } = req.params;
    const programDegree = await programDegreeService.getProgramDegreeById(program_id, degree_id);
    if (!programDegree) {
      res.status(404).json({ error: 'ProgramDegree not found' });
    } else {
      res.status(200).json(programDegree);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllProgramDegrees = async (req, res) => {
  try {
    const programDegrees = await programDegreeService.getAllProgramDegrees();
    res.status(200).json(programDegrees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProgramDegree = async (req, res) => {
  try {
    const { program_id, degree_id } = req.params;
    const result = await programDegreeService.deleteProgramDegree(program_id, degree_id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProgramDegree,
  getProgramDegreeById,
  getAllProgramDegrees,
  deleteProgramDegree,
};
