import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'sqlite',
  database: '.db/sql',
  synchronize: true,
  entities: [
    __dirname + '/cost-control/**/*.entity{.ts,.js}', 
    __dirname + '/quality-control/**/*.entity{.ts,.js}'
  ]};
