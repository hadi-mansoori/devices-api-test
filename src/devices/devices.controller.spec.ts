import {Test, TestingModule} from '@nestjs/testing';
import * as request from 'supertest';
import {DevicesController} from './devices.controller';
import {DevicesService} from './devices.service';
import {CreateDeviceDto} from './dto/create-device.dto';

const mockDeviceService = {
    create: jest.fn(dto => {
        return {
            id: Date.now(),
            ...dto
        }
    }),
    findOne: jest.fn(dto => {
        return {
            id: Date.now(),
            ...dto
        }
    }),
};

describe('DevicesController', () => {
    let controller: DevicesController;
    let app;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DevicesController],
            providers: [DevicesService],
        })
            .overrideProvider(DevicesService)
            .useValue(mockDeviceService)
            .compile();

        controller = module.get<DevicesController>(DevicesController);
        app = module.createNestApplication();
        await app.init();
    });

    it('it should create a device', async () => {
        const createDeviceDto: CreateDeviceDto = {
            "device_model": 1,
            "name": "Sensor",
            "note": "Testing a Sensor",
            "serial": "A020000102"
        };
        const result = await controller.create(createDeviceDto);

        expect(result).toEqual({
            message: "created",
            data: {
                "device_model": 1,
                "name": "Sensor",
                "note": "Testing a Sensor",
                "serial": "A020000102",
                "id": expect.any(Number)
            }

        });
    });

    it('it should find a device by id', async () => {
        const result = await controller.findOne(1);
        expect(result).toEqual({
            message: "found",
            data: {
                id : expect.any(Number)
            }
        });
    });


    afterEach(async () => {
        await app.close();
    });
});
