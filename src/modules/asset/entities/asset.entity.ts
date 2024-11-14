import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Superhero } from 'modules/superhero/entities/superhero.entity';

@Entity()
export class Asset {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 500 })
  uri: string;

  @Column({ type: 'varchar', length: 150 })
  description: string;

  @ManyToOne(() => Superhero, superhero => superhero.assets)
  superhero: Superhero;
}
