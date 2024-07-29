const { DataTypes } = require('sequelize');
const sequelize = require('../../utils/db');
const Student = require('./studentsModels');
const Course = require('./coursesModels');

const CourseStudent = sequelize.define('CourseStudent', {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  tableName: 'course_student',
  timestamps: true,
});

Student.belongsToMany(Course, { 
    through: CourseStudent, 
    foreignKey: 'student_id', 
    as: 'courses' 
});

Course.belongsToMany(Student, { 
    through: CourseStudent, 
    foreignKey: 'course_id', 
    as: 'students'
 });

module.exports = CourseStudent;
