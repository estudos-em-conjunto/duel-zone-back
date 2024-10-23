"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const dotenv = require("dotenv");
const typeorm_1 = require("typeorm");
dotenv.config();
exports.databaseProviders = [
    {
        provide: "DATA_SOURCE",
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: "postgres",
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                entities: ["dist/database/entities/*.js"],
                synchronize: false,
                migrations: ["dist/database/migrations/*.js"],
                migrationsRun: true,
                migrationsTableName: "_migrations",
                logging: true,
            });
            dataSource
                .initialize()
                .then(() => {
                console.log("Data Source has been initialized!");
            })
                .catch((err) => {
                console.error("Error during Data Source initialization", err);
            });
            return dataSource;
        },
    },
];
//# sourceMappingURL=database-connection.provides.js.map