import { IsNotEmpty } from 'class-validator';

import { Asset } from 'modules/asset/entities/asset.entity';
import { Superhero } from 'modules/superhero/entities/superhero.entity';

export class UpdateSuperheroAssetsDto {
  @IsNotEmpty()
  asset: Asset;

  @IsNotEmpty()
  superhero: Superhero;
}
