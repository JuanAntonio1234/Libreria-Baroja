/* eslint-disable no-undef */
// user_book.router.js

const router = require('express').Router()

const {
    getBooksByUser,
    getAll,
    addBookToUserLibrary
} = require("../controllers/user_book.controller.js")

router.get('/', getAll)
router.get('/:id', getBooksByUser)
router.post('/', addBookToUserLibrary)

module.exports = router
