import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';

import { ConfigService } from '../../../config/config.service';

import { CreateTokenDto } from '../dto/token.dto';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.getSetting('JWT_SECRET_KEY'),
    });
  }

  async validate(payload: CreateTokenDto) {
    const admin = await this.authService.validate(payload);
    if (admin) {
      return admin;
    }
    throw new UnauthorizedException();
  }
}
