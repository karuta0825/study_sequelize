import { Sequelize, Model, DataTypes, Association } from 'sequelize';
import Project from './project';

export default class Task extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public deadline!: Date;
  public projectId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true
        },
        title: { type: DataTypes.STRING },
        description: { type: DataTypes.TEXT },
        deadline: { type: DataTypes.DATE },
        projectId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false }
      },
      { sequelize, tableName: 'task' }
    );
    return this;
  }

  public static associate() {
    this.belongsTo(Project, { foreignKey: 'projectId', constraints: false });
  }
}
