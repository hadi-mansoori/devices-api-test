import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class DeviceModelsMigration1705004391385 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'device_models',
            columns: [
                { name: 'id', type: 'int', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                { name: 'type', type: 'varchar' },
                { name: 'description', type: 'varchar', isNullable: true },
            ],
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('device_types');
    }
}
