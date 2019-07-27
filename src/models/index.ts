import { Sequelize, CustomSequelize } from 'sequelize';
import Project from './project';
import Task from './task';
const { database, username, password, host, dialect } = require('../../config');

const sequelize: CustomSequelize = new Sequelize(database, username, password, {
  host,
  dialect
});

const db = {
  Task: Task.initialize(sequelize),
  Project: Project.initialize(sequelize)
};

// association
Object.keys(db).forEach(tableName => {
  if (db[tableName].associate) {
    db[tableName].associate();
  }
});

console.log(sequelize.dialect.QueryGenerator.selectQuery);
export { db, sequelize };
