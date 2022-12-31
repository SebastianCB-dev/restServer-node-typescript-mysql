import { Sequelize } from 'sequelize';

const db = new Sequelize('node', 'root', 'Chelsea2021!', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

export default db;