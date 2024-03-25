import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1711313860528 implements MigrationInterface {
    name = 'NewMigration1711313860528'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tb_pessoa\` (\`id\` int NOT NULL AUTO_INCREMENT, \`tipo\` int NOT NULL COMMENT '1 - Pessoas física
2 - Pessoa juridica', \`cpf\` varchar(11) NULL, \`cnpj\` varchar(14) NULL, \`nome\` varchar(150) NOT NULL, \`celular\` varchar(20) NOT NULL, \`telefone\` varchar(20) NOT NULL, \`email\` varchar(150) NOT NULL, \`cep\` varchar(9) NOT NULL, \`logradouro\` varchar(150) NOT NULL, \`numero\` varchar(20) NOT NULL, \`complemento\` varchar(50) NULL, \`cidade\` varchar(50) NULL, \`bairro\` varchar(50) NULL, \`estado\` varchar(50) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`tb_pessoa\``);
    }

}
