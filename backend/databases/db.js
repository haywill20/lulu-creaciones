import { Sequelize } from "sequelize";

const db = new Sequelize("lulu_creaciones_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
