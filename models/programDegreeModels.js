const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Program = require('./programModels');
const Degree = require('./degreeModels');

const ProgramDegree = sequelize.define('ProgramDegree', {}, {
  tableName: 'program_degree',
  timestamps: true,
});

Program.belongsToMany(Degree, { 
    through: ProgramDegree, 
    foreignKey: 'program_id', 
    as: 'degrees' 
});

Degree.belongsToMany(Program, { 
    through: ProgramDegree, 
    foreignKey: 'degree_id', 
    as: 'programs' 
});

module.exports = ProgramDegree;
