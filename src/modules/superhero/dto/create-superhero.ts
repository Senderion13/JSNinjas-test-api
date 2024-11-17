import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateSuperheroDto {
  @IsString()
  @MinLength(2, { message: 'Nickname must have at least 2 characters.' })
  @IsNotEmpty()
  nickname: string;

  @IsNotEmpty()
  @MinLength(2, { message: 'Name must have at least 2 characters.' })
  realName: string;

  @IsNotEmpty()
  @MinLength(2, { message: 'Description must have at least 2 characters.' })
  originDescription: string;

  @IsNotEmpty()
  @MinLength(2, {
    message: 'Superpowers description must have at least 2 characters.',
  })
  superpowers: string;

  @IsNotEmpty()
  @MinLength(2, { message: 'Phrase must have at least 2 characters.' })
  catchPhrase: string;
}
