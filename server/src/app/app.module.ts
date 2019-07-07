import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { App } from './app.entity';

import { ConfigModule } from '../config/config.module';
import { DatabaseModule } from '../database/database.module';
import { UpdloadModule } from '../upload/upload.module';

import { ArticlesModule } from '../modules/articles/articles.module';
import { AuthModule } from '../modules/auth/auth.module';
import { AdminModule } from '../modules/admin/admin.module';

@Global()
@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    UpdloadModule,

    TypeOrmModule.forFeature([App]),

    ArticlesModule,
    AuthModule,
    AdminModule,
  ],
  providers: [AppService],
  controllers: [AppController],
  exports: [AppService],
})
export class AppModule {}
