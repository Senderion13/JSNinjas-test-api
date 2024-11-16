import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Superhero } from './entities/superhero.entity';
import { SuperheroController } from './superhero.controller';
import { SuperheroService } from './superhero.service';

@Module({
  imports: [TypeOrmModule.forFeature([Superhero])],
  controllers: [SuperheroController],
  providers: [SuperheroService],
})
export class SuperheroModule {}
