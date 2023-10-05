//importamos la conexion a la base de datos
import db from "../databases/db.js";

//importamos Sequelize
import { DataTypes } from "sequelize";

const SubCategoriaModel = db.define("subcategorias", {
  id_categoria: { type: DataTypes.STRING },
  nombre: { type: DataTypes.STRING },
});

export default SubCategoriaModel;
