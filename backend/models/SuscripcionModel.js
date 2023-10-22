//importamos la conexion a la base de datos
import db from "../databases/db.js";

//importamos Sequelize
import { DataTypes } from "sequelize";

const SuscripcionModel = db.define("suscripciones", {
  correo: { type: DataTypes.STRING },
});

export default SuscripcionModel;
