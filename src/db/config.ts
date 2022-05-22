import { Sequelize } from "sequelize";
import dotenv from "dotenv"
dotenv.config()

const database: string | undefined = process.env.DB_NAME;
const username: string | undefined = process.env.DB_USERNAME;
const password: string | undefined = process.env.DB_PASSWORD;
const host: string | undefined = process.env.DB_HOST;

export const sequelize = new Sequelize(database || "database", username||"username", password||"", {
  host: host||"localhost",
  dialect: "mysql" /* one of  | 'mariadb' | 'postgres' | 'mssql' */,
});




