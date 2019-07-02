import { Injectable } from '@nestjs/common';

import { Repository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ArticleCreateDto } from './dto/articles.dto';
import { Articles } from './articles.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Articles)
    private readonly articlesRepository: Repository<Articles>,
  ) {}

  async create(articles: ArticleCreateDto): Promise<Articles> {
    return await this.articlesRepository.save(articles);
  }

  async select(): Promise<Articles[]> {
    return await this.articlesRepository.find();
  }

  async selectByID(id: number): Promise<Articles> {
    return await this.articlesRepository.findOneOrFail(id);
  }

  async update(articles: Articles, data: ArticleCreateDto): Promise<Articles> {
    await this.articlesRepository.merge(articles, data);
    return await this.articlesRepository.save(articles);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.articlesRepository.delete(id);
  }
}
