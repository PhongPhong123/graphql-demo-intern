const { GraphQLObjectType } = require('graphql');

const QueryType = new GraphQLObjectType({
    name: 'Root_Query',
    fields: {

    }
});

module.exports = QueryType;