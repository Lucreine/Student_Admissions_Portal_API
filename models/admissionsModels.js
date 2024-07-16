const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Student = require('./studentsModels');
const University = require('./universityModels');
const Degree = require('./degreeModels');

const Admission = sequelize.define('Admission', {
  motivation_letter: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  graduation_year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  average_score: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  card_url: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  tableName: 'admissions',
  timestamps: true,
});

Student.hasMany(Admission, { 
    foreignKey: 'student_id', 
    as: 'admissions' 
});
Admission.belongsTo(Student, { 
    foreignKey: 'student_id', 
    as: 'student' 
});

University.hasMany(Admission, { 
    foreignKey: 'university_id', 
    as: 'admissions' 
});
Admission.belongsTo(University, { 
    foreignKey: 'university_id', 
    as: 'university' 
});

Degree.hasMany(Admission, { 
    foreignKey: 'degree_id', 
    as: 'admissions' 
});
Admission.belongsTo(Degree, { 
    foreignKey: 'degree_id', 
    as: 'degree' 
});

module.exports = Admission;
