/* eslint-disable no-undef */
// book.controller.js

const UserBook = require('../models/user_book.model.js')

async function getBooksByUser(req, res) {
    const books = await UserBook.findAll({
        where: {
            userId: res.locals.user.id
        }
    })
    res.send(books)
}

async function addBookToUserLibrary (req, res) {
    req.body.userId = res.locals.user.id
    const userBook = await UserBook.create(req.body)
    res.send(userBook)
}

async function getAll (req, res) {
    const registers = await UserBook.findAll()
    res.send(registers)
}

async function deleteBook (req, res) {
    console.log(req.params)
    const userBook = await UserBook.destroy({
        where: {
            bookId: req.params.id
        }
    })
    res.send("Book deleted")
}


module.exports = {
    getBooksByUser,
    addBookToUserLibrary,
    getAll,
    deleteBook
}
