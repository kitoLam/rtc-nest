import { Body, Controller, Post } from "@nestjs/common";
import { MetaOptionsService } from "./meta-options.service";
import { MetaOptionCreateDto } from "./dtos/meta-options.dto";

@Controller("meta-options")
export class MetaOptionsController {
  constructor(private readonly metaOptionService: MetaOptionsService) {}
  @Post("/create")
  create(@Body() metaOptionCreateDto: MetaOptionCreateDto) {
    return this.metaOptionService.create(metaOptionCreateDto);
  }
}
