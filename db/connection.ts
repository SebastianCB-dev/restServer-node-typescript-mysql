import { Sequelize } from 'sequelize';

const db = new Sequelize('node', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

export default db;