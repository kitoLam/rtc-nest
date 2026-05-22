import { Injectable } from "@nestjs/common";
import { MetaOptionCreateDto } from "./dtos/meta-options.dto";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { MetaOption } from "./meta-option.entity";

@Injectable()
export class MetaOptionsService {
  constructor(
    /**
     * Inject MetaOption Repository
     */
    @InjectRepository(MetaOption)
    private readonly metaOptionRepository: Repository<MetaOption>
  ) {}
  async create(metaOptionCreateDto: MetaOptionCreateDto) {
    const metaOption = this.metaOptionRepository.create(metaOptionCreateDto);
    return await this.metaOptionRepository.save(metaOption);
  }
}
