import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm";
import { config } from "dotenv";

config();
const configService = new ConfigService();
export const typeOrmConfig: TypeOrmModuleOptions = {
      type: 'mysql',
      host: configService.get<string>('DB_HOST'),
      port: configService.get<number>('DB_PORT'),
      username: configService.get<string>('DB_USER'),
      password: configService.get<string>('DB_PASSWORD'),
      database: configService.get<string>('DB_NAME'),
      logging : configService.get<boolean>('DB_LOGGING'),
      entities: [__dirname + configService.get<string>('DB_ENTITIES')],
      synchronize: configService.get<boolean>('DB_SYNCHRONIZE'),
      autoLoadEntities:configService.get<boolean>('DB_AUTO_LOAD_ENTITIES')
  };

export default new DataSource( {
      type: 'mysql',
      host: configService.get<string>('DB_HOST'),
      port: configService.get<number>('DB_PORT'),
      username: configService.get<string>('DB_USER'),
      password: configService.get<string>('DB_PASSWORD'),
      database: configService.get<string>('DB_NAME'),
      logging : configService.get<boolean>('DB_LOGGING'),
      entities: [__dirname + configService.get<string>('DB_ENTITIES')],
      migrations: [__dirname + configService.get<string>('DB_MIGRATIONS')],
      synchronize: configService.get<boolean>('DB_SYNCHRONIZE')
});

