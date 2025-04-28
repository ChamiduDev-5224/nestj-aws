import { IsEmail, IsEmpty, IsString } from 'class-validator';

export class userCreateDto {
  @IsEmpty()
  id: number;

  @IsEmpty()
  @IsString()
  name: string;

  @IsEmpty()
  @IsString()
  @IsEmail()
  email: string;
}
