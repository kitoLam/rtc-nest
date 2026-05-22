import { IsJSON, IsNotEmpty } from "class-validator";

export class MetaOptionCreateDto {
  @IsNotEmpty()
  @IsJSON()
  metaValue: string;
}
