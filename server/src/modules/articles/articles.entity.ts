import {
  BaseEntity,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ArticleContentText, ArticleContentImage } from './dto/articles.dto';

@Entity('Articles', { schema: 'SCPT' })
@Index('title', ['title'], { unique: true })
export class Articles extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    unique: true,
    name: 'title',
  })
  title: string;

  @Column('varchar', {
    nullable: true,
    name: 'cover',
  })
  cover: string;

  @Column('varchar', {
    nullable: false,
    name: 'description',
  })
  description: string;

  @Column('json', {
    nullable: false,
    name: 'content',
  })
  content?: [ArticleContentImage | ArticleContentText];

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
