const { GraphQLSchema } = require('graphql');
const QueryType = require('./graphql/query/query.type');
const MutationType = require('./graphql/mutation/mutation.type');

const Schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
});

module.exports = Schema;