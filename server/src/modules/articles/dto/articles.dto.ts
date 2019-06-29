import { ApiModelProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUrl } from 'class-validator';

export class ArticleCreateDto {
  @ApiModelProperty()
  @IsNumber()
  readonly id?: number;

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
  @IsString()
  readonly content?: string;
}
