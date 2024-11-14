import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateSuperheroDto {
  @IsString()
  @MinLength(2, { message: 'Nickname must have at least 2 characters.' })
  @IsNotEmpty()
  nickname: string;

  @IsNotEmpty()
  @MinLength(2, { message: 'Name must have at least 2 characters.' })
  real_name: string;

  @IsNotEmpty()
  @MinLength(2, { message: 'Description must have at least 2 characters.' })
  origin_description: string;

  @IsNotEmpty()
  @MinLength(2, {
    message: 'Superpowers description must have at least 2 characters.',
  })
  superpowers: string;

  @IsNotEmpty()
  @MinLength(2, { message: 'Phrase must have at least 2 characters.' })
  catch_phrase: string;
}
