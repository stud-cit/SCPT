import { Body, Get, Put, Delete } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';

import { ConfingCreateDto } from './dto/config.dto';
import { AppService } from './app.service';
import { App } from './app.entity';

@ApiUseTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async select(): Promise<App> {
    return await this.appService.select().catch(() => {
      throw new HttpException('Configuration not found', HttpStatus.NO_CONTENT);
    });
  }

  @Put()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async update(@Body() data: ConfingCreateDto): Promise<App> {
    const confing = await this.appService.select();
    return await this.appService.update(confing, data).catch(() => {
      throw new HttpException('Configuration not found', HttpStatus.NO_CONTENT);
    });
  }

  @Delete()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async delete() {
    return await this.appService.delete(1).catch(() => {
      throw new HttpException('Configuration not found', HttpStatus.NO_CONTENT);
    });
  }
}
