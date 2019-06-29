import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { ConfigModule } from '../../config/config.module';
import { ConfigService } from '../../config/config.service';

import { UsersModule } from '../users/users.module';

import { JwtStrategy } from './strateges/jwt-strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    PassportModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        defaultStrategy: configService.getSetting('NEST_DEF_STRATEGY'),
        session: configService.getSetting('NEST_DEF_SESSION'),
      }),
      inject: [ConfigService],
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.getSetting('JWT_SECRET_KEY'),
        signOptions: {
          expiresIn: configService.getSetting('JWT_EXPIRES_TIME'),
        },
      }),
      inject: [ConfigService],
    }),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [PassportModule, AuthService],
})
export class AuthModule {}
