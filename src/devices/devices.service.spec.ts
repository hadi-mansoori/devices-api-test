import {Test, TestingModule} from '@nestjs/testing';
import {DevicesService} from './devices.service';

const mockDeviceService = {};
describe('DevicesService', () => {
    let service: DevicesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DevicesService],
        })
            .overrideProvider(DevicesService)
            .useValue(mockDeviceService)
            .compile();


        service = module.get<DevicesService>(DevicesService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
