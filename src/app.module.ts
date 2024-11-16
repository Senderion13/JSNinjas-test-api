import { Module } from '@nestjs/common';

import { AssetModule } from 'modules/asset/asset.module';
import { DatabaseModule } from 'modules/database/database.module';
import { HealthModule } from 'modules/health';
import { SuperheroModule } from 'modules/superhero/superhero.module';
import { SuperheroAssetsModule } from 'modules/superheroAssets/superheroAssets.module';

@Module({
  imports: [HealthModule, AssetModule, SuperheroModule, DatabaseModule, SuperheroAssetsModule],
  providers: [],
})
export class AppModule {}
