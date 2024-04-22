/* eslint-disable no-undef */

const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index.js')

const Book = connection.define('book', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    editorial: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genres: {
       type: DataTypes.STRING,
       allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pagsNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }
)

module.exports = Book // Export the User instance so we can require it in other files
