import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { DevicesService } from "./devices.service";


describe('DeviceService (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({

    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/devices/1 (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/devices/8')
      .expect(200)
      .expect((response) => {
        const data = response.body.data;
        expect(data.name).toBe('Sensor');
      });
  });

  it('/api/devices/8 (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/devices/10')
      .expect(404)
  });

  it('/api/devices (POST)', () => {
    const fakeData = {
      name: 'Test Device',
      note: 'This is a test device',
      serial: 'ABC123',
    };

    return request(app.getHttpServer())
      .post('/api/devices')
      .send(fakeData)
      .expect(201)
  });




});
