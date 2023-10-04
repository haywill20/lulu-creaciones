//importamos la conexion a la base de datos
import db from "../databases/db.js";

//importamos Sequelize
import { DataTypes } from "sequelize";

const SliderModel = db.define("sliders", {
  titulo: { type: DataTypes.STRING },
  subtitulo: { type: DataTypes.STRING },
  parrafo: { type: DataTypes.STRING },
  texto_boton: { type: DataTypes.STRING },
  id_producto: { type: DataTypes.INTEGER },
  imagen: { type: DataTypes.STRING },
});
export default SliderModel;
