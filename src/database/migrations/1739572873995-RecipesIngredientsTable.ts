import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class RecipesIngredientsTable1739572873995 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable (
            new Table ({
                name: 'recipes_ingredients',
                columns: [
                    {
                        name:'id',
                        isPrimary: true,
                        type: 'serial'
                    },

                    {
                        name: 'name',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },

                    {
                        name: 'created_at',
                        type: 'date'
                    },
                    
                    {
                        name: 'updated_at',
                        type: 'date'
                    }
                ]
            }), true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
        queryRunner.dropTable('recipes_ingredients')
    
    }

}
