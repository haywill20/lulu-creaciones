//importamos la conexion a la base de datos
import db from "../databases/db.js";

//importamos Sequelize
import { DataTypes } from "sequelize";

const CategoriaModel = db.define("categorias", {
  nombre: { type: DataTypes.STRING },
});

export default CategoriaModel;
