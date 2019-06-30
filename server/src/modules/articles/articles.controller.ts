import { Param, Body, Get, Post, Put, Delete } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Controller, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, UploadedFile } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import {
  ApiUseTags,
  ApiBearerAuth,
  ApiConsumes,
  ApiImplicitFile,
} from '@nestjs/swagger';

import { ArticleCreateDto } from './dto/articles.dto';
import { ArticlesService } from './articles.service';
import { Articles } from './articles.entity';

@ApiUseTags('articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  async create(@Body() data: ArticleCreateDto): Promise<Articles> {
    return await this.articlesService.create(data).catch(() => {
      throw new HttpException(`Rating already exists`, HttpStatus.CONFLICT);
    });
  }

  @Post(':id/upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiImplicitFile({ name: 'file', required: true })
  async uploadFile(@UploadedFile() file) {
    return await file.filename;
  }

  @Get()
  async select(): Promise<Articles[]> {
    return await this.articlesService.select();
  }

  @Put()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async update(@Body() data: ArticleCreateDto): Promise<Articles> {
    const article = await this.articlesService.selectByID(data.id);
    return await this.articlesService.update(article, data).catch(() => {
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
