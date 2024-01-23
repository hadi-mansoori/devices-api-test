import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DevicesModule } from "./devices/devices.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./config/typeorm.config";
import { Devices } from "./entities/device.entity";


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    DevicesModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Devices]),
  ]
})
export class AppModule {
}
