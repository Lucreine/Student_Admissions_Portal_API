const { DataTypes } = require('sequelize');
const sequelize = require('../../utils/db');
const University = require('./universityModels');

const Program = sequelize.define('Program', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'programs',
  timestamps: true,
});

University.hasMany(Program, { 
    foreignKey: 'university_id', 
    as: 'programs' 
});

Program.belongsTo(University, { 
    foreignKey: 'university_id', 
    as: 'university' 
});

module.exports = Program;
