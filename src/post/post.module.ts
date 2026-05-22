import { Module } from "@nestjs/common";
import { PostController } from "./post.controller";
import { PostService } from "./providers/post.service";
import { UserModule } from "src/user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Post } from "./post.entity";
import { MetaOptionsModule } from "src/meta-options/meta-options.module";

@Module({
  imports: [MetaOptionsModule, UserModule, TypeOrmModule.forFeature([Post])],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
