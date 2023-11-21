const Author = require('./models/author');
const Book = require('./models/book');

const resolvers = {
    Query: {
        authors: async () => {
            return await Author.find();
        },
        books: async () => {
            return await Book.find();
        },
        async author(_, { authorid }) {
            return await Author.findOne({ authorid: authorid });
        },
        async book(_, { bookid }) {
            return await Book.findOne({ bookid: bookid });
        },
    },

    Mutation: {
        addAuthor: async (_, { authorInput: { authorid, name } }) => {
            const books = await Book.find({ authorid });
            const newAuthor = new Author({
                authorid, name, books: books.map(book =>
                    ({ bookid: book.bookid, title: book.title }))
            });
            const savedAuthor = await newAuthor.save();
            return savedAuthor;
        },

        addBook: async (_, { bookInput: { bookid, title, authorid } }) => {
            const author = await Author.findOne({ authorid });
            if (!author) {
                throw new Error('Author not found!');
            }
            const newBook = new Book({ bookid, title, authorid });
            const savedBook = await newBook.save();

            author.books.push({ bookid, title });
            await author.save();

            return {
                id: savedBook._id,
                ...savedBook._doc,
            };
        },

    },

    Author: {
        books: async (parent) => {
            return await Book.find({ authorid: parent.authorid });
        },
    },

    Book: {
        author: async (parent) => {
            return await Author.findOne({ authorid: parent.authorid });
        },
    },
};

module.exports = resolvers;