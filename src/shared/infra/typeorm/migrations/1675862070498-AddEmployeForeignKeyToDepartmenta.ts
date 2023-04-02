import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm"

export class AddEmployeForeignKeyToDepartmenta1675862070498 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    
    await queryRunner.addColumn('employees_api_a', new TableColumn(
      {
      name: 'department_id',
      type: 'uuid',
      isNullable: true
      }
    ))

    await queryRunner.createForeignKey(
      'employees_api_a',
      new TableForeignKey({
        name: 'EmployeeDepartment',
        columnNames: ['department_id'],
        referencedTableName: 'departments_api_a',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
      )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('employees_api_a', 'EmployeeDepartment');

    await queryRunner.dropColumn('employees_api_a', 'department_id');

  }

}