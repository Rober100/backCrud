const { DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
  const User = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false
  });

    // Antes de crear o actualizar un usuario, vamos a hashear su contraseña
    User.beforeCreate(async (user) => {
      if (user.changed('password')) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    });
  
    User.beforeUpdate(async (user) => {
      if (user.changed('password')) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    });

  // Compararamos la contraseña proporcionada en "passwordForm" 
  // con la contraseña almacenada en el modelo User actual
  // Devolverá true si la contraseña proporcionada coincide con la
  // contraseña almacenada y false en caso contrario. 
  User.prototype.checkPassword = async function (passwordForm) {
    return await bcrypt.compare(passwordForm, this.password);
  };

  return User;
};