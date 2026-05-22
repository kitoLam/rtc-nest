import { IsJSON, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class TagCreateDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  name: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(512)
  slug: string;
  @IsString()
  @MaxLength(1024)
  description: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(1024)
  featureImageUrl: string;
  @IsJSON()
  schema: string;
}
