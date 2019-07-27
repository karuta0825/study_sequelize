import { Sequelize, Model, DataTypes, Association } from 'sequelize';
import { HasManyCreateAssociationMixin } from 'sequelize';
import Task from './task';

export default class Project extends Model {
  public id!: number;
  public title!: string;
  public description!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static Task: any;
  public createTask!: HasManyCreateAssociationMixin<Task>;

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true
        },
        title: { type: DataTypes.STRING },
        description: { type: DataTypes.TEXT }
      },
      { sequelize, tableName: 'project' }
    );
    return this;
  }

  public static associate() {
    this.Task = this.hasMany(Task, {
      sourceKey: 'id',
      foreignKey: 'projectId',
      constraints: false
    });
  }
}
