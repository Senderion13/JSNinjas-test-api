import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

import { AssetService } from './asset.service';
import { CreateAssetDto } from './dto/create-asset';
import { UpdateAssetDto } from './dto/update-asset';

@Controller('asset')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}
  @Get()
  findAll(@Query() { page, limit }: { page: number; limit: number }) {
    return this.assetService.findAll(page, limit);
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
