const express = require('express');
const {createStudent, getStudent, updateStudent, deleteStudent, getStudentById, getStudentProfile} = require('../controllers/studentsControllers');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

const router = express.Router();

router.get('/', getStudent);
router.post('/', createStudent);
router.get('/:id', getStudentById);
router.get('/profileStu', authenticateToken, authorizeRole('student'), getStudentProfile);
router.put('/:id', authenticateToken, authorizeRole('student'), updateStudent);
router.delete('/:id', authenticateToken, authorizeRole('student'), deleteStudent);

module.exports = router;
