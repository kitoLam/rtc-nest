import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "src/user/user.module";
import { PostModule } from "./post/post.module";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TagsModule } from "./tags/tags.module";
import { MetaOptionsModule } from "./meta-options/meta-options.module";
import { Neo4jModule } from "./neo4j/neo4j.module";
import { SignalingModule } from "./signaling/signaling.module";

@Module({
  imports: [
    // UserModule,
    // PostModule,
    // AuthModule,
    // TypeOrmModule.forRootAsync({
    //   imports: [],
    //   inject: [],
    //   useFactory: () => ({
    //     type: "postgres",
    //     host: process.env.POSTGRESQL_HOST,
    //     port: Number(process.env.POSTGRESQL_PORT),
    //     username: process.env.POSTGRESQL_USER,
    //     password: process.env.POSTGRESQL_PASSWORD,
    //     database: process.env.POSTGRESQL_DB,
    //     synchronize: true,
    //     autoLoadEntities: true // tự tạo các entity trong dự án
    //     // entities: [User, Post, Tag]
    //   })
    // }),
    // TagsModule,
    // MetaOptionsModule,
    // Neo4jModule,
    SignalingModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
