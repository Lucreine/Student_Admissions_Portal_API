const { DataTypes } = require('sequelize');
const User = require('./usersModels');
const sequelize = require('../db')


const Student = sequelize.define('Student', {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthdate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  sexe: {
    type: DataTypes.ENUM,
    values: ['masculin', 'feminin'],
    allowNull: false,
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
  tableName: 'students',
  timestamps: true,
});

User.hasOne(Student, {
  foreignKey: 'userId',
  as: 'student'
});
Student.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user'
});

module.exports = Student;

