import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';

import { DatabaseService } from './database.service';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';

const rootDir = path.dirname(__dirname);

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        name: configService.getSetting('TYPEORM_NAME'),
        type: configService.getSetting('TYPEORM_CONNECTION'),
        host: configService.getSetting('TYPEORM_HOST'),
        port: configService.getSetting('TYPEORM_PORT'),
        username: configService.getSetting('TYPEORM_USERNAME'),
        password: configService.getSetting('TYPEORM_PASSWORD'),
        database: configService.getSetting('TYPEORM_DATABASE'),
        dropSchema: configService.getSetting('TYPEORM_DROP_SCHEMA'),
        synchronize: configService.getSetting('TYPEORM_SYNCHRONIZE'),
        migrationsTableName: configService.getSetting(
          'TYPEORM_MIGRATIONS_TABLE_NAME',
        ),
        keepConnectionAlive: configService.getSetting('TYPEORM_KEEP_ALIVE'),
        entities: [rootDir + '/**/*.entity{.ts,.js}'],
        subscribers: [rootDir + '/**/*.subscriber{.ts,.js}'],
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
