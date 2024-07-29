const universityService = require('../services/universityService');
const bcrypt = require('bcryptjs');
const upload = require('../middleware/upload');


const createUniversity = async (req, res) => {
    const { email, password, name, location, description, contactUniversity, country } = req.body;

    try {
        const userData = {
            email,
            password: await bcrypt.hash(password, 10),
            role: 'admin'
        };

        const universityData = {
            name,
            location,
            description,
            contactUniversity,
            logo: req.file ? req.file.path : null,
            country
        };

        const { user, university } = await universityService.createUniversity(universityData, userData);
        res.status(201).json({ message: 'University registered', user, university });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllUniversity= async (req, res) => {
    try {
        const universities = await universityService.getAllUniversity();
        res.json(universities);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUniversityById = async (req, res) => {
    try {
        const { id } = req.params;
        const university = await universityService.getUniversityById(id);
        if (!university) {
            return res.status(404).json({ error: 'University not found' });
        }
        res.json(university);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUniversityProfile = async (req, res) => {
    try {
        const university = await universityService.getUniversityByUserId(req.user.id);

        if (!university) {
            return res.status(404).json({ message: 'University not found' });
        }
        res.status(200).json(university);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to retrieve university', error: error.message });
    }
};

const updateUniversity = async (req, res) => {
    try {
        const { id } = req.params;
        const {name, location, description, contactUniversity, logo, email, country} = req.body;

        const userData = {email};
        const universityData = {name, location, description, contactUniversity, logo, country};

        const updatedUniversity = await universityService.updateUniversity(id, universityData, userData);
        res.json(updatedUniversity);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const deleteUniversity = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await universityService.deleteUniversity(id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    createUniversity,
    getAllUniversity,
    getUniversityById,
    updateUniversity,
    deleteUniversity,
    getUniversityProfile,
};
