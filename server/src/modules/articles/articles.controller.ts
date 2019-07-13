import { Param, Body, Get, Post, Put, Delete } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';

import { ArticleCreateDto } from './dto/articles.dto';
import { ArticlesService } from './articles.service';
import { Articles } from './articles.entity';

@ApiUseTags('articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() data: ArticleCreateDto): Promise<Articles> {
    return await this.articlesService.create(data).catch(() => {
      throw new HttpException(`Rating already exists`, HttpStatus.CONFLICT);
    });
  }

  @Get()
  async select(): Promise<Articles[]> {
    return await this.articlesService.select();
  }

  @Get(':id')
  async selectByID(@Param('id') id: number): Promise<Articles> {
    return await this.articlesService.selectByID(id).catch(() => {
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
    });
  }

  @Put()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async update(@Body() data: Articles): Promise<Articles> {
    return await this.articlesService.update(data).catch(() => {
      throw new HttpException('Article not found', HttpStatus.NO_CONTENT);
    });
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async delete(@Param('id') id: number) {
    return await this.articlesService.delete(id).catch(() => {
      throw new HttpException('Article not found', HttpStatus.NO_CONTENT);
    });
  }
}
