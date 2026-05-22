import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength
} from "class-validator";
export class UserCreateDto {
  @IsString()
  @MinLength(5)
  @MaxLength(100)
  fullName: string;
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  username: string;
  @IsString()
  @MinLength(8)
  @Matches(/[0-9]/, {
    message: "password need a digit character!"
  })
  @Matches(/[a-z]/)
  @Matches(/[A-Z]/)
  @Matches(/[!@#$%]/)
  password: string;
}
