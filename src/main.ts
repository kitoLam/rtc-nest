import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // chỉ nhận những trường trong dto được vào
      forbidNonWhitelisted: true, // nếu có trường ngoài dto đi vào sẽ báo bad request
      transform: true // sau khi validate sẽ chuyển dữ liệu về đúng type dto
    })
  );
  /**
   * Swagger config
   */
  const config = new DocumentBuilder()
    .setVersion("1.0")
    .setTitle("Test Api Documentation")
    .setDescription("description")
    .addServer("http://localhost:3000")
    .build();
  // Instantiate Document
  const document = SwaggerModule.createDocument(app, config);
  // setup api
  SwaggerModule.setup("api", app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
