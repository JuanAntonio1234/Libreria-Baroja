/* eslint-disable no-undef */
// book.controller.js

const Book = require('../models/book.model.js')

async function getAllBooks(req, res) {
  const books = await Book.findAll()
  res.send(books)
}

async function getBookById(req, res) {
  const book = await Book.findByPk(req.params.id)
  res.send(book)
}

async function getBooksByGenre(req, res) {
  const allBooks = await Book.findAll()
  const booksByGenre = allBooks.filter((book) => {
    return book.genres.includes(req.params.genre)
  })
  res.send(booksByGenre)
}

async function createBook(req, res) {
  try {
    const book = await Book.create(req.body)
    res.send(book)
  } catch (error) {
    res.status("Error --> createBook").send(error)
  }
}

async function updateBookById(req, res) {
  try {
    const book = await Book.update(req.body, {
      where: { id: req.params.id },
    })
    res.send(book)
  } catch (error) {
    res.status("Error --> updateBook").send(error)
  }
}

async function deleteBookById(req, res) {
  try {
    const book = await Book.destroy({
      where: { id: req.params.id },
    })
    res.send(book)
  } catch (error) {
    res.status("Error --> deleteBook").send(error)
  }
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
  getBooksByGenre
}
