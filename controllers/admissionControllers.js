/ controllers/admissionController.js
const admissionService = require('../services/admissionService');

const createAdmission = async (req, res) => {
  try {
    const admissionData = req.body;
    const admission = await admissionService.createAdmission(admissionData);
    res.status(201).json(admission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAdmissionById = async (req, res) => {
  try {
    const { id } = req.params;
    const admission = await admissionService.getAdmissionById(id);
    if (!admission) {
      res.status(404).json({ error: 'Admission not found' });
    } else {
      res.status(200).json(admission);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllAdmissions = async (req, res) => {
  try {
    const admissions = await admissionService.getAllAdmissions();
    res.status(200).json(admissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAdmission = async (req, res) => {
  try {
    const { id } = req.params;
    const admissionData = req.body;
    const admission = await admissionService.updateAdmission(id, admissionData);
    res.status(200).json(admission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAdmission = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await admissionService.deleteAdmission(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createAdmission,
  getAdmissionById,
  getAllAdmissions,
  updateAdmission,
  deleteAdmission,
};