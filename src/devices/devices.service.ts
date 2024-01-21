import { Injectable } from "@nestjs/common";
import { CreateDeviceDto } from "./dto/create-device.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Devices } from "../entities/device.entity";
import { Repository } from "typeorm";

@Injectable()
export class DevicesService {
  constructor(
    @InjectRepository(Devices)
    private readonly devicesRepository: Repository<Devices>
  ) {}

  async create(createDeviceDto: CreateDeviceDto) {


    const device = await this.devicesRepository.save({
      ...createDeviceDto,
      deviceModel: { id: createDeviceDto.device_model},
    });

    return device;
  }

  findOne(id: number) {
    return  this.devicesRepository.findOne({where: {id}});
  }
}
