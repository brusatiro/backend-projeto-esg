import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "rajje.db.elephantsql.com",
    port: 5432,
    username: "crmrvkqj",
    password: "yzp9HTKVxTLkGi4u5Ey4BTFW42ajDcAJ",
    database: "crmrvkqj",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
