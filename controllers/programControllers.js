const programService = require('../services/programService');

const createProgram = async (req, res) => {
  try {
    const programData = req.body;
    const program = await programService.createProgram(programData);
    res.status(201).json(program);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProgramById = async (req, res) => {
  try {
    const { id } = req.params;
    const program = await programService.getProgramById(id);
    if (!program) {
      res.status(404).json({ error: 'Program not found' });
    } else {
      res.status(200).json(program);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllPrograms = async (req, res) => {
  try {
    const programs = await programService.getAllPrograms();
    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProgram = async (req, res) => {
  try {
    const { id } = req.params;
    const programData = req.body;
    const program = await programService.updateProgram(id, programData);
    res.status(200).json(program);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProgram = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await programService.deleteProgram(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProgram,
  getProgramById,
  getAllPrograms,
  updateProgram,
  deleteProgram,
};
