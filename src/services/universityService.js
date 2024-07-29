const universityModels = require('../models/universityModels');
const usersModels = require('../models/usersModels');

const createUniversity = async (universityData, userData) => {
    const users = await usersModels.create(userData);
    const university = await universityModels.create({ ...universityData, userId: users.id });
    return { users, university };
};

const getAllUniversity = async () => {
    return await universityModels.findAll();
};

const getUniversityById = async (id) => {
    return await universityModels.findByPk(id, {
        include: {
            model: usersModels,
            as: 'user',
        },
    });
};

const getUniversityByUserId = async (userId) => {
    return await universityModels.findOne({
        where: { userId },
        include: {
            model: usersModels,
            as: 'user'
        }
    });
    
};

const updateUniversity = async (id, universityData, userData) => {
    const university = await universityModels.findByPk(id, {
        include: {
            model: usersModels,
            as: 'user'
        }
    });
    if (!university) {
        throw new Error('University not found');
    }
    await university.update(universityData);
    await university.user.update(userData);
    return university;
};

const deleteUniversity = async (id) => {
    const university = await universityModels.findByPk(id, {
        include: {
            model: usersModels,
            as: 'user'
        }
    });
    if (!university) {
        throw new Error('University not found');
    }
    await university.destroy();
    await university.user.destroy();

    return {message: 'University deleted successfully'};
};

module.exports = {
    createUniversity,
    getAllUniversity,
    getUniversityById,
    updateUniversity,
    deleteUniversity,
    getUniversityByUserId
};
