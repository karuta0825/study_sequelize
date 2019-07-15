import { Sequelize, Model, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {
  class Task extends Model {}
  Task.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      deadline: DataTypes.DATE
    },
    { sequelize, tableName: 'task' }
  );
  return Task;
};
