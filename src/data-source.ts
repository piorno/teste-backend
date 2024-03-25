import "reflect-metadata"
import { DataSource } from "typeorm"
require('dotenv').config()

export const AppDataSource = new DataSource({
    migrationsTableName: 'migrations',
    type: "mysql",
    host: "127.0.0.1",
    port: Number(process.env.MYSQLDB_PORT),
    username: "root",
    password: process.env.MYSQLDB_PASSWORD,
    database: process.env.MYSQLDB_DATABASE,
    synchronize: true,
    logging: false,
    entities: ["./src/entity/{*.js,*.ts}"],
    subscribers: [],
    migrations: ["./src/migrations/{*.js,*.ts}"],
})
