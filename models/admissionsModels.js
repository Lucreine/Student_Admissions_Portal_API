const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Student = require('./studentModels');
const University = require('./universityModels');
const Degree = require('./degreeModels');
const Program = require('./programModels');

const Admission = sequelize.define('Admission', {
  motivation_letter: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  graduation_year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'accepted', 'rejected'),
    allowNull: false,
    defaultValue: 'pending',
  },
  average_score: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  card_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'admissions',
  timestamps: true,
});

Admission.belongsTo(Student, {
  foreignKey: 'student_id',
  as: 'student',
});

Admission.belongsTo(University, {
  foreignKey: 'university_id',
  as: 'university',
});

Admission.belongsTo(Degree, {
  foreignKey: 'degree_id',
  as: 'degree',
});

Admission.belongsTo(Program, {
  foreignKey: 'program_id',
  as: 'program',
});

module.exports = Admission;
