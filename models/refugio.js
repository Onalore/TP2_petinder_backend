const Refugio = sequelize.define('Refugio', {
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
        is: /^@[a-zA-Z0-9_]{1,30}$/ // Usuario de Instagram válido (30 caracteres o menos, sin espacios).
      },
    },    
  });
  