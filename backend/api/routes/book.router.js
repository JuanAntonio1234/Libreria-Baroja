/* eslint-disable no-undef */
// book.router.js

const router = require('express').Router()

const {
    getAllBooks,
    getBookById,
    createBook,
    updateBookById,
    deleteBookById,
    getBooksByGenre
} = require('../controllers/book.controller.js')

router.get('/', getAllBooks)
router.get('/:id', getBookById)
router.get('/genre/:genre', getBooksByGenre)
router.post('/', createBook)
router.put('/:id', updateBookById)
router.delete('/:id', deleteBookById)

module.exports = router