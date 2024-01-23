import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';

export class DevicesMigration1706004811538 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create devices table
        await queryRunner.createTable(new Table({
            name: 'devices',
            columns: [
                { name: 'id', type: 'int', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                { name: 'name', type: 'varchar', isUnique: true },
                { name: 'note', type: 'varchar', isNullable: true },
                { name: 'serial', type: 'varchar' },
                { name: 'device_model_id', type: 'int' }, // Foreign key column
            ],
        }), true);

        // Create foreign key
        await queryRunner.createForeignKey('devices', new TableForeignKey({
            columnNames: ['device_model_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'device_models',
            onDelete: 'CASCADE', // Cascade delete if the referenced device model is deleted
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop the foreign key first
        const devicesTable = await queryRunner.getTable('devices');
        const foreignKey = devicesTable.foreignKeys.find(fk => fk.columnNames.indexOf('device_model_id') !== -1);
        await queryRunner.dropForeignKey('devices', foreignKey);

        // Drop the devices table
        await queryRunner.dropTable('devices');
    }
}
