const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const Schema = require('./schema');
const Context = require('./context');
const { testingTheConnection, modelingTable, sequelize } = require('./sequelize-connection');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 1808;

(async () => {
    try {
        await testingTheConnection();
        modelingTable();
        await sequelize.sync();
    } catch (error) {
        console.log(error);
    }
})();

app.use('/graphql', graphqlHTTP({
    schema: Schema,
    graphiql: true,
    context: Context
}));

app.listen(PORT, () => {
    console.log('Running server on PORT: ' + PORT);
});