import { Body, Post, Put } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common';
import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';

import { User } from '../../common/decorators/user.decorator';

import { JwtToken } from './interfaces/jwt.interface';
import { CreateTokenDto } from './dto/token.dto';
import { AuthService } from './auth.service';
import { Admin } from '../admin/admin.entity';

@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async create(@Body() data: CreateTokenDto): Promise<JwtToken> {
    const admin = await this.authService.validate(data);

    if (admin) {
      const compare = await this.authService.compare(
        data.password,
        admin.password,
      );

      if (compare) {
        return await this.authService.create({
          login: data.login,
          timestamp: admin.timestamp,
        });
      }
    }

    throw new UnauthorizedException();
  }

  @Put()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async update(@User() admin: Admin): Promise<JwtToken> {
    return await this.authService.create(admin);
  }
}
