import { IsNotEmpty } from 'class-validator';

import { Asset } from 'modules/asset/entities/asset.entity';
import { Superhero } from 'modules/superhero/entities/superhero.entity';

export class CreateSuperheroAssetsDto {
  @IsNotEmpty()
  asset: Asset;

  @IsNotEmpty()
  superhero: Superhero;
}
