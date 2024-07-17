const express = require('express');
const {createStudent, getStudent, updateStudent, deleteStudent, getStudentById, getStudentProfile} = require('../controllers/studentsControllers');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

const router = express.Router();

router.get('/students', getStudent);
router.post('/students', createStudent);
router.get('/students/:id', getStudentById);
router.get('/profileStu', authenticateToken, authorizeRole('student'), getStudentProfile);
router.put('/students/:id', authenticateToken, authorizeRole('student'), updateStudent);
router.delete('/students/:id', authenticateToken, authorizeRole('student'), deleteStudent);

module.exports = router;
