import { DataTypes, Model } from "sequelize";
import sequelize from "../connection/sequelize.js";
// import Refugio from "./refugio.js";
// import Adoptante from "./adoptante.js";
class Mascota extends Model {}

Mascota.init(
  {
    mascota_id: {
      //almacenará un identificador único universal
      type: DataTypes.UUID,
      //genera un UUID utilizando la versión 4 del algoritmo, que se basa en la aleatoriedad
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    sexo: {
      type: DataTypes.ENUM("hembra", "macho"),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    fechaDeNacimiento: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    tipo: {
      type: DataTypes.ENUM("perro", "gato", "conejo"),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    sequelize,
    modelName: "Mascota", // Nombre del modelo
  }
);

export default Mascota;
