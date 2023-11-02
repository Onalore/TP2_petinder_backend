import { DataTypes } from "sequelize";
import sequelize from "../connnection/sequalize.js";
const Mascota = sequelize.define('Mascota', {
    mascota_id:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
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
    // Agregar la relación con el refugio.
  });
  
  //Mascota.belongsTo(Refugio, { foreignKey: 'refugioId' });
  export default Mascota