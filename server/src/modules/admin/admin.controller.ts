import { Body, Get, Post, Put, Delete } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';

import { User } from '../../common/decorators/user.decorator';
import { AppService } from '../../app/app.service';

import { AdminCreateDto } from './dto/admin.dto';
import { AdminService } from './admin.service';
import { Admin } from './admin.entity';

@ApiUseTags('admin')
@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly appService: AppService,
  ) {}

  @Post()
  async create(@Body() data: AdminCreateDto): Promise<Admin> {
    const scope = await this.adminService.select();

    if (!scope.length) {
      await this.appService.create({});
      return await this.adminService.create(data);
    }

    throw new HttpException(`User already exists`, HttpStatus.CONFLICT);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async select(@User() user: Admin): Promise<Admin> {
    return await user;
  }

  @Put()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async update(
    @User() user: Admin,
    @Body() data: AdminCreateDto,
  ): Promise<Admin> {
    return await this.adminService.update(user, data).catch(() => {
      throw new HttpException('User not found', HttpStatus.NO_CONTENT);
    });
  }

  @Delete()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async delete(@User() user: Admin) {
    return await this.adminService.delete(user.id).catch(() => {
      throw new HttpException('User not found', HttpStatus.NO_CONTENT);
    });
  }
}
