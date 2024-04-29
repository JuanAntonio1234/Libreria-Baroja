/* eslint-disable no-undef */
const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index.js')

const User = connection.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol: {
      type: DataTypes.ENUM('admin', 'user', "premiumUser"),
      allowNull: false,
      defaultValue: 'user',
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }
)

module.exports = User // Export the User instance so we can require it in other files
