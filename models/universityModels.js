const { DataTypes } = require('sequelize');
const User = require('./usersModels');
const sequelize = require('../db')


const University = sequelize.define('University', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  contactUniversity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
    allowNull: false,
  }
}, {
  tableName: 'universities',
  timestamps: true,
});

User.hasOne(University, {
  foreignKey: 'userId',
  as: 'university'
});
University.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user'
});

module.exports = University;

