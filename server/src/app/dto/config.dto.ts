import { ApiModelProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ConfingCreateDto {
  @ApiModelProperty()
  @IsString()
  readonly title?: string;

  @ApiModelProperty()
  @IsString()
  readonly description?: string | null;

  @ApiModelProperty()
  @IsString()
  readonly altContent?: string | null;
}
