const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Degree = sequelize.define('Degree', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nb_year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'degrees',
  timestamps: true,
});

module.exports = Degree;
