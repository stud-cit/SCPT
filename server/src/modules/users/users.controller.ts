import { Body, Get, Post, Put, Delete } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';

import { User } from '../../common/decorators/user.decorator';
import { AppService } from '../../app/app.service';

import { UserCreateDto } from './dto/users.dto';
import { UsersService } from './users.service';
import { Users } from './users.entity';

@ApiUseTags('users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly appService: AppService,
  ) {}

  @Post()
  async create(@Body() data: UserCreateDto): Promise<Users> {
    const scope = await this.usersService.select();

    if (!scope.length) {
      await this.appService.create({});
      return await this.usersService.create(data);
    }

    throw new HttpException(`User already exists`, HttpStatus.CONFLICT);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async select(@User() user: Users): Promise<Users> {
    return await user;
  }

  @Put()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async update(
    @User() user: Users,
    @Body() data: UserCreateDto,
  ): Promise<Users> {
    return await this.usersService.update(user, data).catch(() => {
      throw new HttpException('User not found', HttpStatus.NO_CONTENT);
    });
  }

  @Delete()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async delete(@User() user: Users) {
    return await this.usersService.delete(user.id).catch(() => {
      throw new HttpException('User not found', HttpStatus.NO_CONTENT);
    });
  }
}
