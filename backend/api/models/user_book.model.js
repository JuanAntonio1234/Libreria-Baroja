/* eslint-disable no-undef */
const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index.js')

const UserBook = connection.define('user_book', {
    status: {
        type: DataTypes.ENUM('pending', 'completed'),
        allowNull: false,
        defaultValue: 'pending'
      }
})

module.exports = UserBook