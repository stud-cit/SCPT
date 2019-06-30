import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsUrl, IsArray } from 'class-validator';

export class ArticleContentText {
  @ApiModelProperty()
  @IsString()
  readonly type: string;

  @ApiModelProperty()
  @IsString()
  readonly filling: string;
}

export class ArticleContentImage {
  @ApiModelProperty()
  @IsString()
  readonly type: string;

  @ApiModelProperty()
  @IsString()
  readonly alt: string;

  @ApiModelProperty()
  @IsString()
  readonly src: string;
}

export class ArticleCreateDto {
  @ApiModelProperty()
  @IsString()
  readonly title: string;

  @ApiModelProperty()
  @IsUrl()
  readonly cover?: string;

  @ApiModelProperty()
  @IsString()
  readonly description?: string;

  @ApiModelProperty()
  @IsArray()
  readonly content?: [ArticleContentText | ArticleContentImage];
}
