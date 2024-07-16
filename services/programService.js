const programModels = require('../models/programModels');

const createProgram = async (programData) => {
  return await programModels.create(programData);
};

const getProgramById = async (id) => {
  return await programModels.findByPk(id);
};

const getAllPrograms = async () => {
  return await programModels.findAll();
};

const updateProgram = async (id, programData) => {
  const program = await programModels.findByPk(id);
  if (!program) {
    throw new Error('Program not found');
  }
  return await program.update(programData);
};

const deleteProgram = async (id) => {
  const program = await programModels.findByPk(id);
  if (!program) {
    throw new Error('Program not found');
  }
  await program.destroy();
  return { message: 'Program deleted successfully' };
};

module.exports = {
  createProgram,
  getProgramById,
  getAllPrograms,
  updateProgram,
  deleteProgram,
};
