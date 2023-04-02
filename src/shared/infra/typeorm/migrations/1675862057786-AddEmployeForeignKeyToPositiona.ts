import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm"

export class AddEmployeForeignKeyToPositiona1675862057786 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    
    await queryRunner.addColumn('employees_api_a', new TableColumn(
      {
      name: 'position_id',
      type: 'uuid',
      isNullable: true
      }
    ))

    await queryRunner.createForeignKey(
      'employees_api_a',
      new TableForeignKey({
        name: 'EmployeePosition',
        columnNames: ['position_id'],
        referencedTableName: 'positions_api_a',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
      )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('employees_api_a', 'EmployeePosition');

    await queryRunner.dropColumn('employees_api_a', 'position_id');

  }

}