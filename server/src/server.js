const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const Schema = require('./schema');
const Context = require('./context');
const {
    testingTheConnection,
    sequelize
} = require('./sequelize-connection');
const { applyMiddleware } = require('graphql-middleware');
const Permissions = require('./permissions');
const { expressjwt: jwt } = require('express-jwt');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 1808;

(async () => {
    try {
        await testingTheConnection();
        await sequelize.sync();
    } catch (error) {
        console.log(error);
    }
})();

app.use('/graphql', jwt({
    secret: 'hihihaha',
    algorithms: ['HS256']
}));

app.use('/graphql', graphqlHTTP({
    schema: applyMiddleware(Schema, Permissions),
    graphiql: true,
    context: Context
}));

app.listen(PORT, () => {
    console.log('Running server on PORT: ' + PORT);
});