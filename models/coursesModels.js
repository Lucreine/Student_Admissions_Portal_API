const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const University = require('./universityModels');
const Degree = require('./degreeModels');

const Course = sequelize.define('Course', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  credits: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  level: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'courses',
  timestamps: true,
});

University.hasMany(Course, { 
    foreignKey: 'university_id', 
    as: 'courses' 
});

Course.belongsTo(University, { 
    foreignKey: 'university_id', 
    as: 'university' 
});

Degree.hasMany(Course, { 
    foreignKey: 'degree_id', 
    as: 'courses' 
});
Course.belongsTo(Degree, { 
    foreignKey: 'degree_id', 
    as: 'degree' 
});

module.exports = Course;
