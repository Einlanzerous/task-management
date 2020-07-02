import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

const PORT = 3001;

async function bootstrap() {
  const log = new Logger('bootstrap');

  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);

  log.log(`Application listening on port ${PORT}`);
}
bootstrap();
