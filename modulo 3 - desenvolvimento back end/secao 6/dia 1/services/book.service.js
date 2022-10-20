const { Book } = require('../models')

const getAll = async () => {
  const users = await Book.findAll()

  return users
}

const getById = async (id) => {
  const book = Book.findByPk(id);
  
  return book;
}

const createBook = async (book) => {
  const newBook = await Book.create({title: book.title, author: book.author, pageQuantity: book.pageQuantity})
  return newBook;
}

const updateBook = async (id, book) => {
  const [updatedBook] = await Book.update(
    { title: book.title, author: book.author, pageQuantity: book.pageQuantity},
    { where: {id} },
  )

  return updatedBook;
}

const deleteBook = async (id) => {
  const book = await Book.destroy(
    { where: {id} },
  )

  return book;
}



module.exports = {
  deleteBook,
  updateBook,
  getAll,
  getById,
  createBook,
}