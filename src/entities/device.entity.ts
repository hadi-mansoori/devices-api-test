import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { DeviceModels } from "./device-model.entity";


@Entity({ name: 'devices' })
export class Devices {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique:true})
  name: string;

  @Column({nullable: true })
  note: string;

  @ManyToOne(() => DeviceModels, { eager: true, cascade: true })
  @JoinColumn({ name: 'device_model' })
  deviceModel: DeviceModels;

  @Column()
  serial: string;
}
