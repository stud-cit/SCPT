import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Admin')
export class Admin extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    nullable: false,
    unique: true,
    name: 'login',
  })
  login: string;

  @Column('varchar', {
    nullable: true,
    unique: true,
    name: 'email',
  })
  email: string | null;

  @Column('varchar', {
    nullable: false,
    unique: true,
    name: 'password',
  })
  password: string;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'createAt',
  })
  createAt: Date;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updateAt',
  })
  updateAt: Date;
}
