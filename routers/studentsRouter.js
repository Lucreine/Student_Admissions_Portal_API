const express = require('express');
const {createStudent, getStudent, updateStudent, deleteStudent, getStudentById} = require('../controllers/studentsControllers');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

const router = express.Router();

router.get('/students', getStudent);
router.post('/students', createStudent);
router.put('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);
router.get('/students/:id', authenticateToken, authorizeRole('student'), getStudentById)
module.exports = router;
