import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/pipes/validate.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidateInputPipe());
  app.enableCors({
    origin: ['http://localhost:3000', 'https://localhost:3001', 'https://kurkov.online'],
  })
  await app.listen(3000);
}
bootstrap();
