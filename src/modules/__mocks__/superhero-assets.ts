import { Asset } from 'modules/asset/entities/asset.entity';
import { Superhero } from 'modules/superhero/entities/superhero.entity';
import { SuperheroAssets } from 'modules/superheroAssets/entities/superheroAssets.entity';

export const mockResult: SuperheroAssets = {
  id: 1,
  superhero: new Superhero(),
  asset: new Asset(),
};
