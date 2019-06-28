import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { App } from './app.entity';

import { ConfigModule } from '../config/config.module';
import { DatabaseModule } from '../database/database.module';

import { AuthModule } from '../modules/auth/auth.module';
import { UsersModule } from '../modules/users/users.module';

@Global()
@Module({
  imports: [
    AuthModule,
    DatabaseModule,
    TypeOrmModule.forFeature([App]),
    ConfigModule,
    UsersModule,
  ],
  providers: [AppService],
  controllers: [AppController],
  exports: [AppService],
})
export class AppModule {}
