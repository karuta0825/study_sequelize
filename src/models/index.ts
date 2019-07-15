import { Sequelize } from 'sequelize';
import Project from './project';
import Task from './task';
const { database, username, password, host, dialect } = require('../../config');

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect
});

const project = Project(sequelize);
const task = Task(sequelize);

export { project, task };
