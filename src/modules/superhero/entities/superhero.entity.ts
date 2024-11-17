import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { SuperheroAssets } from '../../superheroAssets/entities/superheroAssets.entity';

@Entity()
export class Superhero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  nickname: string;

  @Column({ type: 'varchar', length: 30 })
  realName: string;

  @Column({ type: 'varchar', length: 150 })
  originDescription: string;

  @Column({ type: 'varchar', length: 100 })
  superpowers: string;

  @Column({ type: 'varchar', length: 50 })
  catchPhrase: string;

  @OneToMany(() => SuperheroAssets, superheroAssets => superheroAssets.superhero)
  superheroAssets: SuperheroAssets[];
}
