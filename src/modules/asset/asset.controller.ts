import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { AssetService } from './asset.service';
import { CreateAssetDto } from './dto/create-asset';
import { UpdateAssetDto } from './dto/update-asset';

@Controller('asset')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}
  @Get()
  findAll() {
    return this.assetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.assetService.findOne(id);
  }

  @Post()
  create(@Body() createAssetDto: CreateAssetDto) {
    return this.assetService.createAsset(createAssetDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAssetDto: UpdateAssetDto) {
    return this.assetService.updateAsset(id, updateAssetDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.assetService.removeAsset(id);
  }
}
