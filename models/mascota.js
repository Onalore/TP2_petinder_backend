import { DataTypes, Model } from 'sequelize';
import sequelize from '../connnection/sequelize.js';
import Refugio from './refugio.js';
import Adoptante from './adoptante.js';
class Mascota extends Model {}

Mascota.init(
  {
    mascota_id: {
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
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      },
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    // Agrega la relación con el refugio si es necesario.
  },
  {
    sequelize,
    modelName: 'Mascota', // Nombre del modelo
  }
);

//Mascota.belongsTo(Adoptante);
Mascota.belongsTo(Refugio);

export default Mascota;