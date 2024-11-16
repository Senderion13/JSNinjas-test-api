import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateAssetDto } from './dto/create-asset';
import { UpdateAssetDto } from './dto/update-asset';
import { Asset } from './entities/asset.entity';

@Injectable()
export class AssetService {
  constructor(
    @InjectRepository(Asset)
    private readonly assetRepository: Repository<Asset>,
  ) {}
  findAll(page = 1, limit = 5): Promise<Asset[]> {
    const offset = (page - 1) * limit;
    return this.assetRepository.find({ skip: offset, take: limit });
  }
  findOne(id: number): Promise<Asset | null> {
    return this.assetRepository.findOneBy({ id });
  }
  createAsset(createAssetDto: CreateAssetDto): Promise<Asset> {
    const asset: Asset = new Asset();

    asset.uri = createAssetDto.uri;

    if (createAssetDto.description) {
      asset.description = createAssetDto.description;
    }

    return this.assetRepository.save(asset);
  }
  updateAsset(id: number, updateAssetDto: UpdateAssetDto): Promise<Asset> {
    const asset: Asset = new Asset();

    asset.uri = updateAssetDto.uri;

    if (updateAssetDto.description) {
      asset.description = updateAssetDto.description;
    }

    asset.id = id;

    return this.assetRepository.save(asset);
  }

  removeAsset(id: number): Promise<{ affected?: number | null }> {
    return this.assetRepository.delete(id);
  }
}
