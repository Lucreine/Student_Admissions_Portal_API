const express = require('express');
const {createStudent, getStudent, updateStudent, deleteStudent} = require('../controllers/studentsControllers');

const router = express.Router();

router.get('/students', getStudent);
router.post('/students', createStudent);
router.put('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);

module.exports = router;
