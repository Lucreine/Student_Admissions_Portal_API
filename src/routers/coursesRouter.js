const express = require('express');

const {createCourse, getCourses, getCourseById, updateCourse, deleteCourse} = require('../controllers/coursesControllers');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

const router = express.Router();

router.post('/', authenticateToken, authorizeRole('admin'), createCourse);
router.get('/', getCourses);
router.get('/:id', getCourseById);
router.put('/:id', authenticateToken, authorizeRole('admin'), updateCourse);
router.delete('/:id', authenticateToken, authorizeRole('admin'), deleteCourse);

module.exports = router;
