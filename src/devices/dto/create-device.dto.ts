// create-device.dto.ts
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateDeviceDto {

  @IsNotEmpty()
  @IsNumber()
   device_model: number;

  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly note: string;

  @IsString()
  readonly serial: string;
}
