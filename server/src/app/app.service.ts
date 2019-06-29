import { Injectable } from '@nestjs/common';

import { Repository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ConfingCreateDto } from './dto/config.dto';
import { App } from './app.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(App)
    private readonly appRepository: Repository<App>,
  ) {}

  async create(config: ConfingCreateDto): Promise<App> {
    return await this.appRepository.save(config);
  }

  async select(): Promise<App> {
    return await this.appRepository.findOneOrFail({
      order: {
        id: 'DESC',
      },
    });
  }

  async update(config: App, data: ConfingCreateDto): Promise<App> {
    await this.appRepository.merge(config, data);
    return await this.appRepository.save(config);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.appRepository.delete(id);
  }
}
