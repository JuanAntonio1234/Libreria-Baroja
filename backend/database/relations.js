const User = require('../api/models/user.model.js')
const Book = require('../api/models/book.model.js')
const UserBook = require('../api/models/user_book.model.js')

const initializeRelations = () => {
  try {
    
    User.belongsToMany(Book, { through: 'user_book' })
    Book.belongsToMany(User, { through: 'user_book' })

    console.log('Relations added to models')
  } catch (error) {
    console.log(error)
  }
}


module.exports = initializeRelations