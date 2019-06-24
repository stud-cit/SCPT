import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import * as bodyParser from 'body-parser';

import { AppModule } from './app/app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = await new ConfigService();
  const options = await new DocumentBuilder()
    .setTitle('')
    .setDescription('')
    .setBasePath(config.getSetting('APP_PREFFIX'))
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('docs/', app, document);

  return await app
    .use(bodyParser.json())
    .setGlobalPrefix(config.getSetting('APP_PREFFIX'))
    .useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    )
    .enableCors()
    .listen(config.getSetting('APP_PORT'));
}

bootstrap();
