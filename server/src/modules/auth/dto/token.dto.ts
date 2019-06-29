import { ApiModelProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTokenDto {
  @ApiModelProperty()
  @IsString()
  readonly login: string;

  @ApiModelProperty()
  @IsString()
  readonly password: string;
}
