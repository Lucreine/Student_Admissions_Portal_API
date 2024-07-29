const programModels = require('../models/programModels');
const universityModels = require('../models/universityModels');

const createProgram = async (programData, userId) => {
  const university = await universityModels.findOne({ where: { userId } });
  if (!university) {
      throw new Error('University not found for the connected user');
  }
  const program = await programModels.create({ ...programData, university_id: university.id });
    return program
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
