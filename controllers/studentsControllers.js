const studentsService = require('../services/studentsService.js');
const bcrypt = require('bcrypt');


const getStudent = async (req, res) => {
    try {
        const students = await studentsService.getStudent();
        res.status(200).json({ message: "List of students", students });
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve students", error: error.message });
    }
}

const createStudent = async (req, res) => {
    const { email, password, firstname, lastname, address, phone_number, birthdate, sexe, country } = req.body;

    try {
        const userData = {
            email,
            password: await bcrypt.hash(password, 10),
            role: 'student'
        };

        const studentData = {
            firstname,
            lastname,
            address,
            phone_number,
            birthdate,
            sexe,
            country
        };

        const { users, students } = await studentsService.createStudent(studentData, userData);
        res.status(201).json({ message: 'Student registered', users, students });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { email, firstname, lastname, address, phone_number, birthdate, sexe, country } = req.body;

        const userData = { email };
        const studentData = { firstname, lastname, address, phone_number, birthdate, sexe, country };

        const updatedStudent = await studentsService.updateStudent(id, studentData, userData);
        res.json(updatedStudent);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await studentsService.deleteStudent(id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent
};
