import { Module } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DevicesController } from './devices.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Devices } from "../entities/device.entity";
@Module({
  controllers: [DevicesController],
  providers: [DevicesService],
  imports: [TypeOrmModule.forFeature([Devices])]
})
export class DevicesModule {}
