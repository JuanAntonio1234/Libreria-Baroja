/* eslint-disable no-undef */
// user_book.router.js

const router = require('express').Router()

const {
    getBooksByUser,
    getAll,
    addBookToUserLibrary,
    deleteBook
} = require("../controllers/user_book.controller.js")

const { checkAuth } = require('../middlewares/auth.js')

router.get('/user', checkAuth, getBooksByUser)
router.get('/', getAll)
router.post('/', checkAuth, addBookToUserLibrary)
router.delete('/:id', deleteBook)

module.exports = router
