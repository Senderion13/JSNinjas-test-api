import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

import { CreateSuperheroDto } from './dto/create-superhero';
import { UpdateSuperheroDto } from './dto/update-superhero';
import { SuperheroService } from './superhero.service';

@Controller('superhero')
export class SuperheroController {
  constructor(private readonly superheroService: SuperheroService) {}

  @Post()
  create(@Body() createSuperheroDto: CreateSuperheroDto) {
    return this.superheroService.createSuperhero(createSuperheroDto);
  }

  @Get()
  findAll(@Query() { page, limit }: { page: number; limit: number }) {
    return this.superheroService.findAllSuperhero(page, limit);
  }

  @Get(':id')
  findSuperhero(@Param('id') id: string) {
    return this.superheroService.findSuperhero(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSuperheroDto: UpdateSuperheroDto) {
    return this.superheroService.updateSuperhero(+id, updateSuperheroDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.superheroService.removeSuperhero(+id);
  }
}
