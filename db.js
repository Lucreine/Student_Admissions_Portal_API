const { Sequelize } = require('sequelize');
require('dotenv').config();

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   host: 'localhost',
//   dialect: 'postgres',
// });

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false,
  dialectOptions: {
      ssl: true
  }
});

module.exports = sequelize;
