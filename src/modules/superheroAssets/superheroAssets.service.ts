import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { CreateSuperheroAssetsDto } from './dto/create-superheroAssets';
import { UpdateSuperheroAssetsDto } from './dto/update-superheroAssets';
import { SuperheroAssets } from './entities/superheroAssets.entity';

@Injectable()
export class SuperheroAssetsService {
  constructor(
    @InjectRepository(SuperheroAssets)
    private readonly superheroAssetsRepository: Repository<SuperheroAssets>,
  ) {}
  createSuperheroAssets(createSuperheroDto: CreateSuperheroAssetsDto): Promise<SuperheroAssets> {
    const superheroAssets: SuperheroAssets = new SuperheroAssets();
    superheroAssets.asset = createSuperheroDto.asset;
    superheroAssets.superhero = createSuperheroDto.superhero;
    return this.superheroAssetsRepository.save(superheroAssets);
  }

  findAllSuperheroAssets(page = 1, limit = 5): Promise<SuperheroAssets[]> {
    const offset = (page - 1) * limit;
    return this.superheroAssetsRepository.find({
      skip: offset,
      take: limit,
      relations: { asset: true, superhero: true },
    });
  }

  findSuperheroAssets(id: number): Promise<SuperheroAssets | null> {
    return this.superheroAssetsRepository.findOne({ where: { id }, relations: { asset: true, superhero: true } });
  }

  updateSuperheroAssets(id: number, updateSuperheroDto: UpdateSuperheroAssetsDto): Promise<SuperheroAssets> {
    const superheroAssets: SuperheroAssets = new SuperheroAssets();
    superheroAssets.asset = updateSuperheroDto.asset;
    superheroAssets.superhero = updateSuperheroDto.superhero;
    superheroAssets.id = id;
    return this.superheroAssetsRepository.save(superheroAssets);
  }

  removeSuperheroAssets(id: number): Promise<DeleteResult> {
    return this.superheroAssetsRepository.delete(id);
  }
}
