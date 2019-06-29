import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('App', { schema: 'SCPT' })
export class App extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    nullable: true,
    name: 'title',
  })
  title: string | null;

  @Column('varchar', {
    nullable: true,
    name: 'description',
  })
  description: string | null;

  @Column('varchar', {
    nullable: true,
    name: 'altContent',
  })
  altContent: string | null;

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
