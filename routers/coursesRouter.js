const express = require('express');

const {createCourse, getCourses, getCourseById, updateCourse, deleteCourse} = require('../controllers/coursesControllers');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

const router = express.Router();

router.post('/course', authenticateToken, authorizeRole('admin'), createCourse);
router.get('/course', getCourses);
router.get('/course/:id', getCourseById);
router.put('/course/:id', authenticateToken, authorizeRole('admin'), updateCourse);
router.delete('/course/:id', authenticateToken, authorizeRole('admin'), deleteCourse);

module.exports = router;
