import { UserCreateDto } from "./user-create.dto";
import { IsString, MinLength } from "class-validator";

export class UserUpdateDto extends UserCreateDto {
  @IsString()
  @MinLength(10)
  userId: string;
}
