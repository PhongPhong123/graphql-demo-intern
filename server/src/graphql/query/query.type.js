const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull, GraphQLInt } = require('graphql');
const UserType = require('../user/user.type');
const QueryResolver = require('./query.resolver');

const QueryType = new GraphQLObjectType({
    name: 'Root_Query',
    fields: {
        getAllUser: {
            type: GraphQLInt,
            resolve: () => { return 1; }
        },
        // getUserByID: {

        // }
    }
});

module.exports = QueryType;