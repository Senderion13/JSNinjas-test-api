import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

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
    superhero.realName = createSuperheroDto.realName;
    superhero.originDescription = createSuperheroDto.originDescription;
    superhero.superpowers = createSuperheroDto.superpowers;
    superhero.catchPhrase = createSuperheroDto.catchPhrase;

    return this.superheroRepository.save(superhero);
  }

  findAllSuperhero(page = 1, limit = 5): Promise<[Superhero[], number]> {
    const offset = (page - 1) * limit;
    return this.superheroRepository.findAndCount({
      skip: offset,
      take: limit,
      relations: { superheroAssets: { asset: true } },
    });
  }

  findSuperhero(id: number): Promise<Superhero | null> {
    return this.superheroRepository.findOne({
      where: { id },
      relations: { superheroAssets: { asset: true } },
    });
  }

  updateSuperhero(id: number, updateSuperheroDto: UpdateSuperheroDto): Promise<Superhero> {
    const superhero: Superhero = new Superhero();

    superhero.nickname = updateSuperheroDto.nickname;
    superhero.realName = updateSuperheroDto.realName;
    superhero.originDescription = updateSuperheroDto.originDescription;
    superhero.superpowers = updateSuperheroDto.superpowers;
    superhero.catchPhrase = updateSuperheroDto.catchPhrase;
    superhero.id = id;

    return this.superheroRepository.save(superhero);
  }

  removeSuperhero(id: number): Promise<DeleteResult> {
    return this.superheroRepository.delete(id);
  }
}
