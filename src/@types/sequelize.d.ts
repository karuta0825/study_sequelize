import { Sequelize } from 'sequelize';

declare module 'sequelize' {
  export class CustomSequelize extends Sequelize {
    public readonly dialect?: any;
  }
}
