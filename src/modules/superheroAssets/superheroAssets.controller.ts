import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

import { CreateSuperheroAssetsDto } from './dto/create-superheroAssets';
import { UpdateSuperheroAssetsDto } from './dto/update-superheroAssets';
import { SuperheroAssetsService } from './superheroAssets.service';

@Controller('superheroAssets')
export class SuperheroAssetsController {
  constructor(private readonly superheroAssetsService: SuperheroAssetsService) {}

  @Post()
  create(@Body() createSuperheroDto: CreateSuperheroAssetsDto) {
    return this.superheroAssetsService.createSuperheroAssets(createSuperheroDto);
  }

  @Get()
  findAll(@Query() { page, limit }: { page: number; limit: number }) {
    return this.superheroAssetsService.findAllSuperheroAssets(page, limit);
  }

  @Get(':id')
  findSuperhero(@Param('id') id: string) {
    return this.superheroAssetsService.findSuperheroAssets(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSuperheroDto: UpdateSuperheroAssetsDto) {
    return this.superheroAssetsService.updateSuperheroAssets(+id, updateSuperheroDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    console.log(id);
    return this.superheroAssetsService.removeSuperheroAssets(+id);
  }
}
