import { createMock, DeepMocked } from '@golevelup/ts-jest';
import { Repository } from 'typeorm';

import { CreateSuperheroDto } from './dto/create-superhero';
import { UpdateSuperheroDto } from './dto/update-superhero';
import { Superhero } from './entities/superhero.entity';
import { SuperheroService } from './superhero.service';

import { deleteResult, id } from '../__mocks__/shared';
import { mockResult } from '../__mocks__/superhero';

describe('superheroService', () => {
  let superheroService: SuperheroService;
  let createSuperheroDto: CreateSuperheroDto;
  let updateSuperheroDto: UpdateSuperheroDto;
  let superheroRepositoryMock: DeepMocked<Repository<Superhero>>;
  beforeEach(() => {
    superheroRepositoryMock = createMock<Repository<Superhero>>();
    superheroService = new SuperheroService(superheroRepositoryMock);
    createSuperheroDto = new CreateSuperheroDto();
    updateSuperheroDto = new UpdateSuperheroDto();
  });
  it('should find all', async () => {
    const mockResults: [Superhero[], number] = [[mockResult, mockResult], 2];
    superheroRepositoryMock.findAndCount.mockResolvedValue(mockResults);
    const result = await superheroService.findAllSuperhero();

    expect(superheroRepositoryMock.findAndCount).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockResults);
  });
  it('should find one', async () => {
    superheroRepositoryMock.findOne.mockResolvedValue(mockResult);
    const result = await superheroService.findSuperhero(id);

    expect(superheroRepositoryMock.findOne).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockResult);
  });
  it('should create one', async () => {
    superheroRepositoryMock.save.mockResolvedValue(mockResult);
    const result = await superheroService.createSuperhero(createSuperheroDto);
    expect(superheroRepositoryMock.save).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockResult);
  });
  it('should update one', async () => {
    superheroRepositoryMock.save.mockResolvedValue(mockResult);
    const result = await superheroService.updateSuperhero(id, updateSuperheroDto);
    expect(superheroRepositoryMock.save).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockResult);
  });
  it('should remove one', async () => {
    superheroRepositoryMock.delete.mockResolvedValue(deleteResult);
    const result = await superheroService.removeSuperhero(id);
    expect(superheroRepositoryMock.delete).toHaveBeenCalledTimes(1);
    expect(result).toEqual(deleteResult);
  });
});
