import { Sequelize, Model, DataTypes } from 'sequelize';

class Project extends Model {
  public id!: number;
  public title!: string;
  public description!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default (sequelize: Sequelize) => {
  Project.init(
    {
      title: { type: DataTypes.STRING },
      description: { type: DataTypes.TEXT }
    },
    { sequelize, tableName: 'project' }
  );
  return Project;
};
