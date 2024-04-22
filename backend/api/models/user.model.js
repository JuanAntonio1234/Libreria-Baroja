/* eslint-disable no-undef */
const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index.js')

const User = connection.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol: {
      type: DataTypes.ENUM('admin', 'user'),
      allowNull: false,
      defaultValue: 'user',
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contraseña: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }
)

module.exports = User // Export the User instance so we can require it in other files
