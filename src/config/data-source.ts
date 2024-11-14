/* eslint-disable @typescript-eslint/naming-convention */
import { Environments } from '@constants';
import * as dotenv from 'dotenv';
import * as pg from 'pg';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenv.config();

const isTestEnvironment = process.env.NODE_ENV === Environments.TEST;
const url = isTestEnvironment ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL;

// when running migrations, determine directory / extension from the filename
const [dir, ext] = RegExp(/(src|dist)\/config\/data-source\.(js|ts)/i)
  .exec(__filename)
  ?.slice(1) ?? ['dist', 'js'];

// Enable parse decimals to numbers. We have to be sure that our data won't run into precision issues
pg.types.setTypeParser(1700, parseFloat);

// apply TypeORM patch to upstream bug

export const config: DataSourceOptions = {
  type: 'postgres',
  url,
  ssl: process.env.NODE_ENV === Environments.PRODUCTION ? { rejectUnauthorized: false } : process.env.DB_SSL === 'true',
  synchronize: true,
  entities: [`${dir}/**/*.entity.${ext}`],
  migrations: [`${dir}/modules/database/migrations/*.${ext}`],
};

export const dataSource = new DataSource(config);
