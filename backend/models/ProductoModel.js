//importamos la conexion a la base de datos
import db from "../databases/db.js";

//importamos Sequelize
import { DataTypes } from "sequelize";

const ProductoModel = db.define("productos", {
  id_categoria: { type: DataTypes.INTEGER },
  id_subcategoria: { type: DataTypes.INTEGER },
  nombre: { type: DataTypes.STRING },
  cod: { type: DataTypes.INTEGER },
  valoracion: { type: DataTypes.INTEGER },
  precio: { type: DataTypes.INTEGER },
  disponibilidad: { type: DataTypes.STRING },
  condicion: { type: DataTypes.STRING },
  marca: { type: DataTypes.STRING },
  cantidad: { type: DataTypes.INTEGER },
  imagen: { type: DataTypes.STRING },
});
export default ProductoModel;
