const { gql } = require('apollo-server-express');

module.exports = gql`

input AuthorInput {
  authorid: Int!
  name: String!
}

type Author {
    authorid: Int!
    name: String!
    books: [Book!]!
  }

input BookInput {
    bookid: Int!
    title: String!
    authorid: Int!
    }  
  
  type Book {
    bookid: Int!
    title: String!
    author: Author!
  }
  
  type Query {
    author(authorid: Int!): Author! 
    book(bookid: Int!): Book!
    authors: [Author!]
    books: [Book!]
  }
  
  type Mutation {
    addAuthor(authorInput: AuthorInput): Author
    addBook(bookInput: BookInput): Book

  }
  


`;