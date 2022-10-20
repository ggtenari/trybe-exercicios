const BookService = require('../services/book.service')

const getAll = async (_req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  }
  catch (err) {
    return res.status(500).json({message: err.message});
  }
}

const getById = async (req, res) => {
  try {
    const {id} = req.params;
    const book = await BookService.getById(id);

    if(!book) return res.status(404).json({message: 'Book not found'})

    return res.status(200).json(book);
  }
  catch (err) {
    return res.status(500).json({message: err.message});
  }
}

const createBook = async (req, res) => {
  try {
    const book = req.body
    const newBook = await BookService.createBook(book);
    return res.status(201).json(newBook)
  }
  catch (err) {
    return res.status(500).json({message: err.message});
  }
}

const updateBook = async (req, res) => {
  try{
    const {id} = req.params
    const book = req.body

    const updatedBook = await BookService.updateBook(id, book);

    if(!updatedBook) return res.status(404).json({message: 'Book not found'})

    return res.status(200).json({message: 'Book updated!'})
  }
  catch (err) {
    return res.status(500).json({message: err.message});
  }
}

const deleteBook = async (req, res) => {
  try {
    const {id} = req.params

    const deletedBook = BookService.deleteBook(id)

    if(!deletedBook) return res.status(404).json({message: 'Book not found'})
    return res.status(200).json({message: 'book deleted!'})
  }
  catch (err) {
    return res.status(500).json({message: err.message});
  }
}

module.exports = {
  deleteBook,
  updateBook,
  getAll,
  getById,
  createBook,
}