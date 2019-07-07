import { ApiModelProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsArray } from 'class-validator';

export enum ArticleContentType {
  text = 'text',
  image = 'image',
  video = 'video',
}

export class ArticleContent {
  @ApiModelProperty({ enum: ['text', 'image', 'video'] })
  @IsString()
  readonly type: ArticleContentType;

  @ApiModelProperty()
  @IsString()
  readonly value: string;

  @ApiModelProperty()
  @IsString()
  readonly comment?: string;
}

export class ArticleCreateDto {
  @ApiModelProperty()
  @IsNumber()
  readonly id: number;

  @ApiModelProperty()
  @IsString()
  readonly title: string;

  @ApiModelProperty()
  @IsString()
  readonly cover?: string;

  @ApiModelProperty()
  @IsString()
  readonly description?: string;

  @ApiModelProperty({ type: [ArticleContent] })
  @IsArray()
  readonly content: ArticleContent[];
}
