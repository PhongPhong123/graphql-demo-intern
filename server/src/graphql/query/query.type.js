const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = require('graphql');
const UserType = require('../user/user.type');
const QueryResolver = require('./query.resolver');

const QueryType = new GraphQLObjectType({
    name: 'Root_Query',
    fields: {
        getAllUser: {

        },
        getUserByID: {

        }
    }
});

module.exports = QueryType;