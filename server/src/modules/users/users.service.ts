import { Injectable } from '@nestjs/common';

import { Repository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { UserCreateDto } from './dto/users.dto';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async create(user: UserCreateDto): Promise<Users> {
    return await this.usersRepository.save(user);
  }

  async select(): Promise<Users[]> {
    return await this.usersRepository.find();
  }

  async selectByID(id: number): Promise<Users> {
    return await this.usersRepository.findOne(id);
  }

  async selectByLogin(login: string): Promise<Users> {
    return await this.usersRepository.findOne({
      where: {
        login: login,
      },
    });
  }

  async update(user: Users, data: UserCreateDto): Promise<Users> {
    await this.usersRepository.merge(user, data);
    return await this.usersRepository.save(user);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
  }
}
