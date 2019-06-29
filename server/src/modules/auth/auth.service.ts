import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { ConfigService } from '../../config/config.service';
import { UsersService } from '../users/users.service';
import { Users } from '../users/users.entity';

import { JwtPayload, JwtToken } from './interfaces/jwt.interface';

import { CreateTokenDto } from './dto/token.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async compare(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }

  async create(payload: JwtPayload): Promise<JwtToken> {
    const token = await this.jwtService.sign(payload);

    return {
      expiresIn: this.configService.getSetting('JWT_EXPIRES_TIME'),
      token: token,
    };
  }

  async validate(payload: CreateTokenDto): Promise<Users> {
    return await this.userService.selectByLogin(payload.login);
  }
}
