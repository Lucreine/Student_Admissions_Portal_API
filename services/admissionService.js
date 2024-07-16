const Admission = require('../models/admissionsModels');
const Student = require('../models/studentsModels');
const University = require('../models/universityModels');
const Degree = require('../models/degreeModels');
const Program = require('../models/programModels');

const createAdmission = async (admissionData) => {
  return await Admission.create(admissionData);
};

const getAllAdmissions = async () => {
  return await Admission.findAll({
    include: [
      { model: Student, as: 'student' },
      { model: University, as: 'university' },
      { model: Degree, as: 'degree' },
      { model: Program, as: 'program' }
    ]
  });
};

const getAdmissionById = async (id) => {
  return await Admission.findByPk(id, {
    include: [
      { model: Student, as: 'student' },
      { model: University, as: 'university' },
      { model: Degree, as: 'degree' },
      { model: Program, as: 'program' }
    ]
  });
};

const updateAdmission = async (id, admissionData) => {
  const admission = await Admission.findByPk(id);
  if (!admission) {
    throw new Error('Admission not found');
  }
  return await admission.update(admissionData);
};

const deleteAdmission = async (id) => {
  const admission = await Admission.findByPk(id);
  if (!admission) {
    throw new Error('Admission not found');
  }
  await admission.destroy();
};

module.exports = {
  createAdmission,
  getAllAdmissions,
  getAdmissionById,
  updateAdmission,
  deleteAdmission
};
