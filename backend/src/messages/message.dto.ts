import { IsNotEmpty, IsEmail, MinLength, MaxLength } from 'class-validator';

export class MessageDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(31)
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(164)
  readonly message: string;
}
