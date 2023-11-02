const Mascota = sequelize.define('Mascota', {
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
  
  Mascota.belongsTo(Refugio, { foreignKey: 'refugioId' });
  export default Mascota