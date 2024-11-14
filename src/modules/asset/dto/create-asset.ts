import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateAssetDto {
  @IsString()
  @MinLength(2, { message: 'URI must have at least 2 characters.' })
  @IsNotEmpty()
  uri: string;

  description?: string;
}
