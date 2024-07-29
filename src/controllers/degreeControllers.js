const degreeService = require('../services/degreeService');

const createDegree = async (req, res) => {
  try {
    const degreeData = req.body;
    const degree = await degreeService.createDegree(degreeData);
    res.status(201).json(degree);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDegrees = async (req, res) => {
  try {
    const degrees = await degreeService.getDegrees();
    res.status(200).json(degrees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDegreeById = async (req, res) => {
  try {
    const { id } = req.params;
    const degree = await degreeService.getDegreeById(id);
    if (!degree) {
      return res.status(404).json({ error: 'Degree not found' });
    }
    res.status(200).json(degree);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateDegree = async (req, res) => {
  try {
    const { id } = req.params;
    const degreeData = req.body;
    const updatedDegree = await degreeService.updateDegree(id, degreeData);
    res.status(200).json(updatedDegree);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteDegree = async (req, res) => {
  try {
    const { id } = req.params;
    await degreeService.deleteDegree(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createDegree,
  getDegrees,
  getDegreeById,
  updateDegree,
  deleteDegree,
};
