
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookid: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    authorid: {
        type: Number,
        required: true,
        unique: true
    },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
