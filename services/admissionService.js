const Admission = require('../models/admissionModels');

const createAdmission = async (admissionData) => {
  return await Admission.create(admissionData);
};

const getAdmissionById = async (id) => {
  return await Admission.findByPk(id, {
    include: ['student', 'university', 'degree'],
  });
};

const getAllAdmissions = async () => {
  return await Admission.findAll({
    include: ['student', 'university', 'degree'],
  });
};

const updateAdmission = async (id, admissionData) => {
  const admission = await Admission.findByPk(id);
  if (!admission) {
    throw new Error('Admission not found');
  }
  await admission.update(admissionData);
  return admission;
};

const deleteAdmission = async (id) => {
  const admission = await Admission.findByPk(id);
  if (!admission) {
    throw new Error('Admission not found');
  }
  await admission.destroy();
  return { message: 'Admission deleted successfully' };
};

module.exports = {
  createAdmission,
  getAdmissionById,
  getAllAdmissions,
  updateAdmission,
  deleteAdmission,
};