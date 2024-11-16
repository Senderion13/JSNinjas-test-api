import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { SuperheroAssets } from 'modules/superheroAssets/entities/superheroAssets.entity';

@Entity()
export class Asset {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 500 })
  uri: string;

  @Column({ type: 'varchar', length: 150 })
  description: string;

  @OneToMany(() => SuperheroAssets, superheroAssets => superheroAssets.superhero)
  superheroAssets: SuperheroAssets[];
}
