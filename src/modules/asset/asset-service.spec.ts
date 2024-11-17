import { createMock, DeepMocked } from '@golevelup/ts-jest';
import { Repository } from 'typeorm';

import { mockResult } from 'modules/__mocks__/asset';
import { deleteResult, id } from 'modules/__mocks__/shared';

import { AssetService } from './asset.service';
import { CreateAssetDto } from './dto/create-asset';
import { UpdateAssetDto } from './dto/update-asset';
import { Asset } from './entities/asset.entity';

describe('AssetService', () => {
  let assetService: AssetService;
  let createAssetDto: CreateAssetDto;
  let updateAssetDto: UpdateAssetDto;
  let assetRepositoryMock: DeepMocked<Repository<Asset>>;
  beforeEach(() => {
    assetRepositoryMock = createMock<Repository<Asset>>();
    assetService = new AssetService(assetRepositoryMock);
    createAssetDto = new CreateAssetDto();
    updateAssetDto = new UpdateAssetDto();
  });
  it('should find all', async () => {
    const mockResults: Asset[] = [mockResult, mockResult];
    assetRepositoryMock.find.mockResolvedValue(mockResults);
    const result = await assetService.findAll();

    expect(assetRepositoryMock.find).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockResults);
  });
  it('should find one', async () => {
    assetRepositoryMock.findOneBy.mockResolvedValue(mockResult);
    const result = await assetService.findOne(id);

    expect(assetRepositoryMock.findOneBy).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockResult);
  });
  it('should create one', async () => {
    assetRepositoryMock.save.mockResolvedValue(mockResult);
    const result = await assetService.createAsset(createAssetDto);
    expect(assetRepositoryMock.save).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockResult);
  });
  it('should update one', async () => {
    assetRepositoryMock.save.mockResolvedValue(mockResult);
    const result = await assetService.updateAsset(id, updateAssetDto);
    expect(assetRepositoryMock.save).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockResult);
  });
  it('should remove one', async () => {
    assetRepositoryMock.delete.mockResolvedValue(deleteResult);
    const result = await assetService.removeAsset(id);
    expect(assetRepositoryMock.delete).toHaveBeenCalledTimes(1);
    expect(result).toEqual(deleteResult);
  });
});
