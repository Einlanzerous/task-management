import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const log = new Logger('Bootstrap');

  const serverConfig = config.get('server');
  const port = process.env.PORT || serverConfig.port;

  const app = await NestFactory.create(AppModule);
  if (process.env.NODE_ENV === 'development' ) {
    log.log('Application is in [DEVELOPMENT] mode');
    app.enableCors();
  }
  await app.listen(port);

  log.log(`Application listening on port ${port}`);
}
bootstrap();
