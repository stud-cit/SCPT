import { Module } from '@nestjs/common';

import { ConfigModule } from '../config/config.module';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { EmailsModule } from '../emails/emails.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [ConfigModule, DatabaseModule, EmailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
