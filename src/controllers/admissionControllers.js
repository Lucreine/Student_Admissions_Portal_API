const admissionService = require('../services/admissionService');


const createAdmission = async (req, res) => {
  const { motivation_letter, graduation_year, average_score, university_id, degree_id, program_id } = req.body;

  try {
    const admissionData = {
      motivation_letter,
      graduation_year,
      average_score,
      card: req.file ? req.file.path : null,
      university_id,
      degree_id,
      program_id
  };
    const admission = await admissionService.createAdmission(admissionData);
    res.status(201).json(admission);
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

const updateAdmissionStatus = async (req, res) => {
  try {
      const { id } = req.params;
      const { status } = req.body;
      const updatedAdmission = await admissionService.updateAdmissionStatus(id, status);
      res.status(200).json(updatedAdmission);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

module.exports = {
    createAdmission,
    getAllAdmissions,
    getAdmissionById,
    updateAdmissionStatus
};
