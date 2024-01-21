import { Controller, Get, Post, Body, Param, Req, NotFoundException } from "@nestjs/common";
import { DevicesService } from './devices.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { DeviceModels } from "../entities/device-model.entity";



@Controller('api/devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Post()
  async create(@Body() createDeviceDto: CreateDeviceDto, @Req() request) {
    const device = await this.devicesService.create(createDeviceDto);
    return { message: 'created', data: device };
  }
  @Get(':id')
  async findOne(@Param('id') id: number) {
    const device = await this.devicesService.findOne(id);
    if (!device) {
      throw new NotFoundException(`Device with ID ${id} not found`);
    }
    return { message: 'found', data: device };
  }
}
