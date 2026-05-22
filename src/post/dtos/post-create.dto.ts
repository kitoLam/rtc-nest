/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
  ValidateIf
} from "class-validator";
import { postType, statusType } from "../enums/postType.enum";
import { MetaOptionCreateDto } from "../../meta-options/dtos/meta-options.dto";
import { Type } from "class-transformer";
export class PostCreateDto {
  // title
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  title: string;
  // content
  @IsString()
  content: string;
  // slug
  @IsString()
  @IsNotEmpty()
  @MaxLength(512)
  slug: string;
  // postType
  @IsEnum(postType)
  @IsNotEmpty()
  postType: postType;
  // status
  @IsEnum(statusType)
  status: statusType;
  // schema
  @ValidateIf((o: PostCreateDto) => o.schema != "")
  @IsJSON()
  @IsOptional()
  schema: string;
  // imageUrl
  @ValidateIf((o: PostCreateDto) => o.imageUrl != "")
  @IsString()
  @IsUrl()
  @MaxLength(1024)
  imageUrl: string;
  // publishedOn
  @ValidateIf((o) => (o as any).publishedOn != "")
  @IsDateString()
  @IsOptional()
  @IsISO8601()
  publishedOn: Date;
  // tags
  @IsArray()
  @IsString({
    each: true
  })
  @MinLength(2, { each: true })
  tags: string[];
  // metaOptions
  @IsNotEmpty()
  @Type(() => MetaOptionCreateDto)
  metaOptions: MetaOptionCreateDto;
}
