//importamos la conexion a la base de datos
import db from "../databases/db.js";

//importamos Sequelize
import { DataTypes } from "sequelize";

const AyudaModel = db.define("ayudas", {
  nombre: { type: DataTypes.STRING },
  correo: { type: DataTypes.STRING },
  mensaje: { type: DataTypes.TEXT },
});

export default AyudaModel;
