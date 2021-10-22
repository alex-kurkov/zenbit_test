import { IsNotEmpty, IsEmail, MinLength, MaxLength } from 'class-validator'

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
  @MaxLength(164, {message: 'message should contain no more than 164 symbols'})
  readonly message: string;
}