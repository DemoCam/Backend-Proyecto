import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS para React
  app.enableCors({
    origin: 'http://localhost:3001', // Puerto de React
    credentials: true,
  });
  
  // Habilitar validación global
  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(3000);
  console.log('Backend corriendo en http://localhost:3000');
}
bootstrap();
