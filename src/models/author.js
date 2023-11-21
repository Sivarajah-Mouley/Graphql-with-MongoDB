const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    authorid: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    books: [{ bookid: Number, title: String }]
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
