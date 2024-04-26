/* eslint-disable no-undef */
// user_book.router.js

const router = require('express').Router()

const {
    getBooksByUser,
    getAll,
    addBookToUserLibrary
} = require("../controllers/user_book.controller.js")

const { checkAuth } = require('../middlewares/auth.js')

router.get('/user', checkAuth, getBooksByUser)
router.get('/', getAll)
router.post('/', checkAuth, addBookToUserLibrary)

module.exports = router
