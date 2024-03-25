import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "tb_pessoa" })
export class Pessoa {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column('int', { name: "tipo", nullable: false, comment: "1 - Pessoas física\n2 - Pessoa juridica" })
    tipo: 1 | 2

    @Column("varchar", { length: 11, name: "cpf", nullable: true })
    cpf?: string | null;
    
    @Column("varchar", { length: 14, name: "cnpj", nullable: true })
    cnpj?: string | null;

    @Column("varchar", { length: 150, name: "nome", nullable: false })
    nome: string;

    @Column("varchar", { length: 20, name: "celular", nullable: false })
    celular: string;

    @Column("varchar", { length: 20, name: "telefone", nullable: false })
    telefone: string;

    @Column("varchar", { length: 150, name: "email", nullable: false })
    email: string;

    @Column("varchar", { length: 9, name: "cep", nullable: false })
    cep: string;

    @Column("varchar", { length: 150, name: "logradouro", nullable: false })
    logradouro: string;

    @Column("varchar", { length: 20, name: "numero", nullable: false })
    numero: string;

    @Column("varchar", { length: 50, name: "complemento", nullable: true })
    complemento: string;

    @Column("varchar", { length: 50, name: "cidade", nullable: true })
    cidade: string;

    @Column("varchar", { length: 50, name: "bairro", nullable: true })
    bairro: string;

    @Column("varchar", { length: 50, name: "estado", nullable: true })
    estado: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt?: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt?: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deleted_at?: Date;
}