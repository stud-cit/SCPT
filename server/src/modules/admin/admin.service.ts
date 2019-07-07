import { Injectable } from '@nestjs/common';

import { Repository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { AdminCreateDto } from './dto/admin.dto';
import { Admin } from './admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly usersRepository: Repository<Admin>,
  ) {}

  async create(user: AdminCreateDto): Promise<Admin> {
    console.log(await this.usersRepository.create(user));
    return await this.usersRepository.save(user);
  }

  async select(): Promise<Admin[]> {
    return await this.usersRepository.find();
  }

  async selectByID(id: number): Promise<Admin> {
    return await this.usersRepository.findOne(id);
  }

  async selectByLogin(login: string): Promise<Admin> {
    return await this.usersRepository.findOne({
      where: {
        login: login,
      },
    });
  }

  async update(user: Admin, data: AdminCreateDto): Promise<Admin> {
    await this.usersRepository.merge(user, data);
    return await this.usersRepository.save(user);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
  }
}
