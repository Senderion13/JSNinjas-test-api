import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { SuperheroAssets } from '../../superheroAssets/entities/superheroAssets.entity';

@Entity()
export class Superhero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  nickname: string;

  @Column({ type: 'varchar', length: 30 })
  real_name: string;

  @Column({ type: 'varchar', length: 150 })
  origin_description: string;

  @Column({ type: 'varchar', length: 100 })
  superpowers: string;

  @Column({ type: 'varchar', length: 50 })
  catch_phrase: string;

  @OneToMany(() => SuperheroAssets, superhero_assets => superhero_assets.superhero)
  superhero_assets: SuperheroAssets[];
}
