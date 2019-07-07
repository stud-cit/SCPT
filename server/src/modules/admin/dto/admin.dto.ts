import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class AdminCreateDto {
  @ApiModelProperty()
  @IsString()
  readonly login: string;

  @ApiModelProperty()
  @IsString()
  @MinLength(8)
  readonly password: string;
}
