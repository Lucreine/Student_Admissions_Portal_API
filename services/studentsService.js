const studentsModels = require('../models/studentsModels');
const usersModels = require('../models/usersModels');


const getStudent= async () => {
    return await studentsModels.findAll({
        include: {
            model: usersModels,
            as: 'user'
        }
    });
}


const getStudentById = async (id) => {
    return await studentsModels.findByPk(id, {
        include: {
            model: usersModels,
            as: 'user'
        }
    });
};


const createStudent = async (studentData, userData) => {
    const users = await usersModels.create(userData);
    const students = await studentsModels.create({ ...studentData, userId: users.id });
    return { users, students };
}



const updateStudent = async (id, studentData, userData) => {
    const students = await studentsModels.findByPk(id, {
        include: {
            model: usersModels,
            as: 'user'
        } 
    });
    if (!students) {
        return("Student not found");
    }
    await students.update(studentData);
    await students.user.update(userData);

    return students;
}

const deleteStudent = async (id) => {
    const students = await studentsModels.findByPk(id, {
        include: {
            model: usersModels,
            as: 'user'
        }
    });
    if (!students) {
        throw new Error("Student not found");
    }

    await students.destroy();
    await students.user.destroy();

    return { message: 'Student deleted successfully' };
}

module.exports = {
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent,
    getStudentById
};
