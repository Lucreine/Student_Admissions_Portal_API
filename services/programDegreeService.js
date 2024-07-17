const ProgramDegree = require('../models/programDegreeModels');
const programModels = require('../models/programModels');
const degreeModels = require('../models/degreeModels');

const createProgramDegree = async (program_id, degree_id) => {
    const program = await programModels.findByPk(program_id);
    const degree = await degreeModels.findByPk(degree_id);

    if (!program || !degree) {
        throw new Error('Program or Degree not found');
    }

    await program.addDegree(degree);
    return { message: 'Degree added to program successfully' };
};

const getProgramDegrees = async (program_id) => {
    const program = await programModels.findByPk(program_id, {
        include: {
            model: degreeModels,
            as: 'degrees'
        }
    });

    if (!program) {
        throw new Error('Program not found');
    }

    return program.degrees;
};

const deleteProgramDegree = async (program_id, degree_id) => {
    const program = await programModels.findByPk(program_id);
    const degree = await degreeModels.findByPk(degree_id);

    if (!program || !degree) {
        throw new Error('Program or Degree not found');
    }

    await program.removeDegree(degree);
    return { message: 'Degree removed from program successfully' };
};

module.exports = {
    createProgramDegree,
    getProgramDegrees,
    deleteProgramDegree
};
