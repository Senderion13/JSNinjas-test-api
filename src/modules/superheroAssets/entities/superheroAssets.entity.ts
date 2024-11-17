import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Asset } from 'modules/asset/entities/asset.entity';
import { Superhero } from 'modules/superhero/entities/superhero.entity';

@Entity()
export class SuperheroAssets {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Asset, asset => asset.superheroAssets)
  @JoinColumn({ name: 'assetId' })
  asset: Asset;

  @ManyToOne(() => Superhero, superhero => superhero.superheroAssets)
  @JoinColumn({ name: 'superheroId' })
  superhero: Superhero;
}
