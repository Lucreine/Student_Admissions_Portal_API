const degreeModels = require('../models/degreeModels');

const createDegree = async (degreeData) => {
  return await degreeModels.create(degreeData);
};

const getDegrees = async () => {
  return await degreeModels.findAll();
};

const getDegreeById = async (id) => {
  return await degreeModels.findByPk(id);
};

const updateDegree = async (id, degreeData) => {
  const degree = await degreeModels.findByPk(id);
  if (!degree) {
    throw new Error('Degree not found');
  }
  await degree.update(degreeData);
  return degree;
};

const deleteDegree = async (id) => {
  const degree = await degreeModels.findByPk(id);
  if (!degree) {
    throw new Error('Degree not found');
  }
  await degree.destroy();
};

module.exports = {
  createDegree,
  getDegrees,
  getDegreeById,
  updateDegree,
  deleteDegree,
};
