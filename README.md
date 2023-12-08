


 # GraphQL Node.js Project
 
This project showcases a GraphQL API built with Node.js, utilizing MongoDB for data storage. It implements a basic system to manage authors and books, allowing users to query authors, books, and create new authors/books through mutations.

## Table of Contents

- [Technologies Used](##technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [GraphQL Schema](#graphql-schema)
- [Resolvers](#resolvers)
- [Queries and Mutations](#queries-and-mutations)
- [Examples](#examples)
- [Contributing](#contributing)

## Technologies Used

- **Node.js**: JavaScript runtime used for the backend.
- **GraphQL**: Query language for APIs, providing a flexible interface for the API consumers.
- **Apollo Server Express**: Framework used to create a GraphQL server with Express.
- **MongoDB**: NoSQL database for storing authors and books data.
- **Mongoose**: MongoDB object modeling tool for Node.js.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/Sivarajah-Mouley/Graphql.git
   ```

2. Install dependencies:

   ```bash
   cd Graphql
   npm install
   ```

3. Set up MongoDB:
   
   - Install and run MongoDB locally or set up a MongoDB Atlas cluster.
   - Guide for MongoDB setup : https://www.mongodb.com/docs/guides/atlas/account/
    
   - Update the MongoDB connection URI in `config.js` or `.env` file.

## Project Structure

```
├── src/
│   ├── models/
│   │   ├── author.js
│   │   └── book.js
│   ├── resolvers.js
│   ├── typeDefs.js
│   └── server.js
├── config.js
└── package.json
```

- **`src/`**: Contains source code.
  - **`models/`**: Defines Mongoose models for Author and Book.
  - **`resolvers.js`**: Defines resolver functions for GraphQL queries and mutations.
  - **`typeDefs.js`**: Contains GraphQL schema definitions.
  - **`server.js`**: Initializes the Apollo Server.

- **`config.js`**: Configuration file for environment variables, including MongoDB connection URI.
- **`package.json`**: Contains project metadata and dependencies.

## Usage
- Find the dependencies in **`package.json`** and  **'devDependencies'** then install them with.
  
for dependencies files:
```bash
npm install <dependencies>
```
for devDependencies fiels :
```bash
npm install <devDependencies> -D
```
 
- Run the server:

```bash
npm run dev
```

The GraphQL server will start and be accessible at `http://localhost:PORT/graphql`.
Change the 'PORT' with the number in 'index.js'
## GraphQL Schema

The GraphQL schema defines the types, queries, and mutations available in the API. See `typeDefs.js` for the schema definitions.

## Resolvers

Resolvers are functions that resolve the queries and mutations defined in the schema. They handle data retrieval, manipulation, and interaction with the database. See `resolvers.js` for resolver functions.

## Queries and Mutations

- **Queries**:
  - `author(authorid: Int!)`: Get a specific author by ID.
  - `book(bookid: Int!)`: Get a specific book by ID.
  - `authors: [Author!]`: Get author in array .
  - `books: [Book!]`: Get book in array.
- **Mutations**:
  - `addAuthor(authorInput: AuthorInput!)`: Create a new author.
  - `addBook(bookInput: BookInput!)`: Create a new book.

  
    

## Examples

### Example Query

Retrieve a specific author:

```graphql
query {
  author(authorid: 1) {
    authorid
    name
    books {
      bookid
      title
    }
  }
}
```

### Example Mutation

Create a new book:

```graphql
mutation {
  addBook(bookInput: {
    bookid: 1
    title: "Sample Book"
    authorid: 1
  }) {
    id
    title
    author {
      authorid
      name
    }
  }
}
```

Some other common querries:
```graphql
{
  books{
    name
    id
    author {
      id
      name
    }
  }
}




{
  authors{
    name
    id
    books {
      id
      name
    }
  }
}


{
  author (id:2){
    name
    id
  }
}

{
  book (id:2){
    name
    id
    authorId
  }
}



mutation{
   addAuthor(name:"J.D.Martin"){
    id
   
  }
}

mutation{
  addBook(name: "Load of The Rings",authorId:4) {
    id
    name
  }
 
}




{
  authors {
    id
    name
    books {
      name
    }
  }
}

```
## Contributing

Contributions are welcome! Fork the repository, make changes, and create a pull request.


