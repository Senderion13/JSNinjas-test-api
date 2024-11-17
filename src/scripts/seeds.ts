import { dataSource } from 'config';

import { assetQuery } from './data/asset';
import { superheroQuery } from './data/superhero';
import { superheroAssetsQuery } from './data/superhero-assets';

export async function seeds() {
  await dataSource.initialize();
  await dataSource.createQueryRunner().query(assetQuery);
  await dataSource.createQueryRunner().query(superheroQuery);
  await dataSource.createQueryRunner().query(superheroAssetsQuery);
  await dataSource.destroy();
}

seeds();
