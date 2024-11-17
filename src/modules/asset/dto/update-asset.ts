import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateAssetDto {
  @IsString()
  @MinLength(2, { message: 'URI must have at least 2 characters.' })
  @IsNotEmpty()
  uri: string;

  @IsString()
  description?: string;
}
