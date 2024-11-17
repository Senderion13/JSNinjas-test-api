import { createMock, DeepMocked } from '@golevelup/ts-jest';
import { Repository } from 'typeorm';

import { deleteResult, id } from 'modules/__mocks__/shared';
import { mockResult } from 'modules/__mocks__/superhero-assets';

import { CreateSuperheroAssetsDto } from './dto/create-superheroAssets';
import { UpdateSuperheroAssetsDto } from './dto/update-superheroAssets';
import { SuperheroAssets } from './entities/superheroAssets.entity';
import { SuperheroAssetsService } from './superheroAssets.service';

describe('superheroService', () => {
  let superheroAssetsService: SuperheroAssetsService;
  let createSuperheroAssetsDto: CreateSuperheroAssetsDto;
  let updateSuperheroAssetsDto: UpdateSuperheroAssetsDto;
  let superheroAssetsRepositoryMock: DeepMocked<Repository<SuperheroAssets>>;
  beforeEach(() => {
    superheroAssetsRepositoryMock = createMock<Repository<SuperheroAssets>>();
    superheroAssetsService = new SuperheroAssetsService(superheroAssetsRepositoryMock);
    createSuperheroAssetsDto = new CreateSuperheroAssetsDto();
    updateSuperheroAssetsDto = new UpdateSuperheroAssetsDto();
  });
  it('should find all', async () => {
    const mockResults: SuperheroAssets[] = [mockResult, mockResult];
    superheroAssetsRepositoryMock.find.mockResolvedValue(mockResults);
    const result = await superheroAssetsService.findAllSuperheroAssets();

    expect(superheroAssetsRepositoryMock.find).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockResults);
  });
  it('should find one', async () => {
    superheroAssetsRepositoryMock.findOne.mockResolvedValue(mockResult);
    const result = await superheroAssetsService.findSuperheroAssets(id);

    expect(superheroAssetsRepositoryMock.findOne).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockResult);
  });
  it('should create one', async () => {
    superheroAssetsRepositoryMock.save.mockResolvedValue(mockResult);
    const result = await superheroAssetsService.createSuperheroAssets(createSuperheroAssetsDto);
    expect(superheroAssetsRepositoryMock.save).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockResult);
  });
  it('should update one', async () => {
    superheroAssetsRepositoryMock.save.mockResolvedValue(mockResult);
    const result = await superheroAssetsService.updateSuperheroAssets(id, updateSuperheroAssetsDto);
    expect(superheroAssetsRepositoryMock.save).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockResult);
  });
  it('should remove one', async () => {
    superheroAssetsRepositoryMock.delete.mockResolvedValue(deleteResult);
    const result = await superheroAssetsService.removeSuperheroAssets(id);
    expect(superheroAssetsRepositoryMock.delete).toHaveBeenCalledTimes(1);
    expect(result).toEqual(deleteResult);
  });
});
