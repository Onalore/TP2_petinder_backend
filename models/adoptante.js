import { DataTypes, Model } from "sequelize";
import sequelize from "../connnection/sequelize.js";
// import Mascota from "./mascota.js";
class Adoptante extends Model {}

Adoptante.init(
  {
    adoptante_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true, // El nombre no puede estar vacío.
      },
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true, // La edad debe ser un número entero.
        min: 18, // La edad mínima permitida.
      },
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        is: /^\d{10}$/, // Un número de teléfono válido (10 dígitos).
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
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    ubicacion: {
      type: DataTypes.STRING, // Almacena la ubicación como una cadena.
    },
  },
  {
    sequelize,
    modelName: "Adoptante", // Nombre del modelo
  }
);

//Adoptante.hasMany(Mascota);

export default Adoptante;
