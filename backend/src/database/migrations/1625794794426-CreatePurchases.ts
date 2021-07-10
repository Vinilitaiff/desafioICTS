import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePurchases1625794794426 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "purchase",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "total",
            type: "int",
          },
          {
            name: "typeOfPurchase",
            type: "varchar",
          },
          {
            name: "status",
            type: "varchar",
          },
          {
            name: "product_id",
            type: "varchar",
            isNullable: true,
            generationStrategy: "uuid",
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKProduct",
            referencedTableName: "product",
            referencedColumnNames: ["id"],
            columnNames: ["product_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("purchase");
  }
}
