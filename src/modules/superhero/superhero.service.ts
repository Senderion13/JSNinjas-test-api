import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateSuperheroDto } from './dto/create-superhero';
import { UpdateSuperheroDto } from './dto/update-superhero';
import { Superhero } from './entities/superhero.entity';

@Injectable()
export class SuperheroService {
  constructor(
    @InjectRepository(Superhero)
    private readonly superheroRepository: Repository<Superhero>,
  ) {}
  createSuperhero(createSuperheroDto: CreateSuperheroDto): Promise<Superhero> {
    const superhero: Superhero = new Superhero();

    superhero.nickname = createSuperheroDto.nickname;
    superhero.real_name = createSuperheroDto.real_name;
    superhero.origin_description = createSuperheroDto.origin_description;
    superhero.superpowers = createSuperheroDto.superpowers;
    superhero.catch_phrase = createSuperheroDto.catch_phrase;

    return this.superheroRepository.save(superhero);
  }

  findAllSuperhero(page = 1, limit = 5): Promise<Superhero[]> {
    const offset = (page - 1) * limit;
    return this.superheroRepository.find({ skip: offset, take: limit, relations: { assets: true } });
  }

  findSuperhero(id: number): Promise<Superhero | null> {
    return this.superheroRepository.findOne({ where: { id }, relations: { assets: true } });
  }

  updateSuperhero(id: number, updateSuperheroDto: UpdateSuperheroDto): Promise<Superhero> {
    const superhero: Superhero = new Superhero();

    superhero.nickname = updateSuperheroDto.nickname;
    superhero.real_name = updateSuperheroDto.real_name;
    superhero.origin_description = updateSuperheroDto.origin_description;
    superhero.superpowers = updateSuperheroDto.superpowers;
    superhero.catch_phrase = updateSuperheroDto.catch_phrase;
    superhero.id = id;

    return this.superheroRepository.save(superhero);
  }

  removeSuperhero(id: number): Promise<{ affected?: number | null }> {
    return this.superheroRepository.delete(id);
  }
}
