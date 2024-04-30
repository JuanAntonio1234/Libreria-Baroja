/* eslint-disable no-undef */
// book.controller.js

const Book = require('../models/book.model.js')
const User = require('../models/user.model.js')
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


async function getBooksByUserProfile(req, res) {
    const user = await User.findAll({
        where: {
            email: res.locals.user.email
        },
        include: Book
    })
    console.log(user[0].books)
    res.send(user[0].books)
}


module.exports = {
    getBooksByUser,
    addBookToUserLibrary,
    getAll,
    deleteBook
}
