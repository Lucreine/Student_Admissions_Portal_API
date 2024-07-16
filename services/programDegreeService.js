const programDegreeModels = require('../models/programDegreeModels');

const createProgramDegree = async (programDegreeData) => {
  return await programDegreeModels.create(programDegreeData);
};

const getProgramDegreeById = async (program_id, degree_id) => {
  return await programDegreeModels.findOne({ where: { program_id, degree_id } });
};

const getAllProgramDegrees = async () => {
  return await programDegreeModels.findAll();
};

const deleteProgramDegree = async (program_id, degree_id) => {
  const programDegree = await programDegreeModels.findOne({ where: { program_id, degree_id } });
  if (!programDegree) {
    throw new Error('ProgramDegree not found');
  }
  await programDegree.destroy();
  return { message: 'ProgramDegree deleted successfully' };
};

module.exports = {
  createProgramDegree,
  getProgramDegreeById,
  getAllProgramDegrees,
  deleteProgramDegree,
};
