import { Body, Post, Put } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common';
import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';

import { User } from '../../common/decorators/user.decorator';

import { JwtToken } from './interfaces/jwt.interface';
import { CreateTokenDto } from './dto/token.dto';
import { AuthService } from './auth.service';
import { Users } from '../users/users.entity';

@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async create(@Body() data: CreateTokenDto): Promise<JwtToken> {
    const user = await this.authService.validate(data);

    if (user) {
      const compare = await this.authService.compare(
        data.password,
        user.password,
      );

      if (compare) {
        return await this.authService.create({
          login: data.login,
          createAt: user.createAt,
          updateAt: user.updateAt,
        });
      }
    }

    throw new UnauthorizedException();
  }

  @Put()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async update(@User() user: Users): Promise<JwtToken> {
    return await this.authService.create(user);
  }
}
