import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SuperheroAssets } from './entities/superheroAssets.entity';
import { SuperheroAssetsController } from './superheroAssets.controller';
import { SuperheroAssetsService } from './superheroAssets.service';

@Module({
  imports: [TypeOrmModule.forFeature([SuperheroAssets])],
  controllers: [SuperheroAssetsController],
  providers: [SuperheroAssetsService],
})
export class SuperheroAssetsModule {}
