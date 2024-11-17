/* eslint-disable @typescript-eslint/naming-convention */
import { Environments } from '@constants';
import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

dotenv.config();

const isTestEnvironment = process.env.NODE_ENV === Environments.TEST;
const url = isTestEnvironment ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL;

// when running migrations, determine directory / extension from the filename
const [dir, ext] = RegExp(/(src|dist)\/config\/data-source\.(js|ts)/i)
  .exec(__filename)
  ?.slice(1) ?? ['dist', 'js'];

export const config: DataSourceOptions = {
  type: 'postgres',
  url,
  namingStrategy: new SnakeNamingStrategy(),
  synchronize: false,
  entities: [`${dir}/**/*.entity.${ext}`],
  migrations: [`${dir}/modules/database/migrations/*.${ext}`],
};

export const dataSource = new DataSource(config);
