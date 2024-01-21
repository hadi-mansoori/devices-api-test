import { Entity, Column, PrimaryGeneratedColumn, OneToMany  } from "typeorm";


@Entity()
export class DeviceModels {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column({ nullable: true })
  description: string;


}