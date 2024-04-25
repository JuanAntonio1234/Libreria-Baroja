/* eslint-disable no-undef */
// book.controller.js

const UserBook = require('../models/user_book.model.js')

async function getBooksByUser(req, res) {
    const books = await UserBook.findAll({
        where: {
            userId: req.params.id
        }
    })
    res.send(books)
}

async function addBookToUserLibrary (req, res) {
    const userBook = await UserBook.create(req.body)
    res.send(userBook)
}

async function getAll (req, res) {
    const registers = await UserBook.findAll()
    res.send(registers)
}


module.exports = {
    getBooksByUser,
    addBookToUserLibrary,
    getAll
}
