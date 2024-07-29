const { DataTypes } = require('sequelize');
const sequelize = require('../../utils/db');
const Course = require('./coursesModels');
const Program = require('./programModels');

const CourseProgram = sequelize.define('CourseProgram', {}, {
  tableName: 'course_program',
  timestamps: true,
});

Course.belongsToMany(Program, { 
    through: CourseProgram, 
    foreignKey: 'course_id', 
    as: 'programs' 
});
Program.belongsToMany(Course, { 
    through: CourseProgram, 
    foreignKey: 'program_id', 
    as: 'courses' 
});

module.exports = CourseProgram;
