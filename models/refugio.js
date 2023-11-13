import { DataTypes, Model } from "sequelize";
import sequelize from "../connection/sequelize.js";

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
      type: DataTypes.ENUM("gatos", "perros", "conejos", "mixto"),
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
        is: /^[^\s]{1,30}$/, // Usuario de Instagram válido (30 caracteres o menos, sin espacios).
      },
    },
  },
  {
    sequelize,
    modelName: "Refugio", // Nombre del modelo
  }
);

export default Refugio;
