const admissionModels = require('../models/admissionsModels');
const studentsModels = require('../models/studentsModels');
const universityModels = require('../models/universityModels');
const degreeModels = require('../models/degreeModels');
const programModels = require('../models/programModels');

const createAdmission = async (admissionData, student_id) => {
  const admission = await admissionModels.create({ ...admissionData, student_id: student_id });
  return admission;
};

const getAllAdmissions = async () => {
  return await admissionModels.findAll({
    include: [
      { model: studentsModels, as: 'student' },
      { model: universityModels, as: 'university' },
      { model: degreeModels, as: 'degree' },
      { model: programModels, as: 'program' }
    ]
  });
};

const getAdmissionById = async (id) => {
  return await admissionModels.findByPk(id, {
    include: [
      { model: studentsModels, as: 'student' },
      { model: universityModels, as: 'university' },
      { model: degreeModels, as: 'degree' },
      { model: programModels, as: 'program' }
    ]
  });
};

const updateAdmissionStatus = async (id, status) => {
  const admission = await admissionModels.findByPk(id);
  if (!admission) {
    throw new Error('Admission not found');
  }
  admission.status = status;
  await admission.save();
  return admission;
};

module.exports = {
    createAdmission,
    getAllAdmissions,
    getAdmissionById,
    updateAdmissionStatus
};
