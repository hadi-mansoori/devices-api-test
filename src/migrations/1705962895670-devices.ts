import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Devices1705962895670 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Tests",
        columns: [{
          name: "name",
          type: "varchar"
        }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
