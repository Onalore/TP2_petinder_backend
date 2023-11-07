import { DataTypes, Model } from "sequelize";
import sequelize from "../connnection/sequelize.js";
// import Mascota from './mascota.js';
class Refugio extends Model {}

Refugio.init(
  {
    refugio_id: {
      type: DataTypes.UUID,
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
    tipoMascotas: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    instagram: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        is: /^@[a-zA-Z0-9_]{1,30}$/, // Usuario de Instagram válido (30 caracteres o menos, sin espacios).
      },
    },
  },
  {
    sequelize,
    modelName: "Refugio", // Nombre del modelo
  }
);

//Refugio.hasMany(Mascota);
export default Refugio;
