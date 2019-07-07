import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Articles')
export class Articles extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    nullable: false,
    unique: true,
    name: 'title',
  })
  title: string;

  @Column('varchar', {
    nullable: false,
    name: 'description',
  })
  description: string;

  @Column('varchar', {
    nullable: false,
    name: 'cover',
  })
  cover: string;

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

  @OneToMany(type => Content, contents => contents.article, {
    eager: true,
    cascade: true,
  })
  content: Content[];
}

@Entity('Content', { schema: 'SCPT' })
export class Content extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Articles, articles => articles.content)
  @JoinColumn({ name: 'article' })
  article: Articles;

  @Column('varchar', {
    nullable: false,
    name: 'type',
  })
  type: string;

  @Column('varchar', {
    nullable: false,
    name: 'value',
  })
  value: string;

  @Column('varchar', {
    nullable: true,
    name: 'comment',
  })
  comment: string | null;
}
