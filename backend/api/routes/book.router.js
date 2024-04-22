/* eslint-disable no-undef */
// book.router.js

const router = require('express').Router()

const {
    getAllBooks,
    getBookById,
    createBook,
    updateBookById,
    deleteBookById
} = require('../controllers/book.controller.js')

router.get('/', getAllBooks)
router.get('/:id', getBookById)
router.post('/', createBook)
router.put('/:id', updateBookById)
router.delete('/:id', deleteBookById)

module.exports = router