const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const port = 5000;

const server = async () => {

    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    })
    await server.start();
    server.applyMiddleware({ app });

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB Connected')
        app.listen(port, () => console.log(`Server running on port ${port}`));
    } catch (error) {
        console.log(error)
    }
}

server();