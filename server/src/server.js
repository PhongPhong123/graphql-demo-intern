const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const Schema = require('./schema');
const Context = require('./context');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 1808;
const MONGO_ACCESS_URL = process.env.MONGO_ACCESS_URL;

mongoose.connect(MONGO_ACCESS_URL)
    .then(() => {
        console.log('Connecting MONGODB');
    })
    .catch((error) => {
        throw new Error(error);
    });

app.use('/graphql', graphqlHTTP({
    schema: Schema,
    graphiql: true,
    context: Context
}));

app.listen(PORT, () => {
    console.log('Running server on PORT: ' + PORT);
});