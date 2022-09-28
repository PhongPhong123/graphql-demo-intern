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
const { dev } = require('./configs/token.config');
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
    secret: dev.token_key,
    algorithms: ['HS256'],
    credentialsRequired: false,
    getToken: (request) => {
        if (request.headers.authorization) {
            const splittedToken = request.headers.authorization.split(' ');
            if (splittedToken[0] === "Bearer") {
                return splittedToken[1];
            }
        }

        if (request.query && request.query.token) {
            return request.query.token;
        }

        return null;
    }
}));

app.use('/graphql', graphqlHTTP((request, _response) => {
    return {
        schema: applyMiddleware(Schema, Permissions),
        graphiql: true,
        context: {
            ...Context,
            headers: request.headers
        }
    };
}));

app.listen(PORT, () => {
    console.log('Running server on PORT: ' + PORT);
});