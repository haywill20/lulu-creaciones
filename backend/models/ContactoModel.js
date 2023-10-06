//importamos la conexion a la base de datos
import db from "../databases/db.js";

//importamos Sequelize
import { DataTypes } from "sequelize";

const ContactoModel = db.define("contacto_cliente", {
  nombre: { type: DataTypes.STRING },
  correo: { type: DataTypes.STRING },
  tema: { type: DataTypes.STRING },
  mensaje: { type: DataTypes.TEXT },
});

export default ContactoModel;
