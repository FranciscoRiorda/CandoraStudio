import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // 1. Habilitamos CORS para que React pueda hacer consultas desde otro puerto
  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();