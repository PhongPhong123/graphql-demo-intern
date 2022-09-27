const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = require('graphql');
const UserType = require('../user/user.type');
const QueryResolver = require('./query.resolver');

const QueryType = new GraphQLObjectType({
    name: 'Root_Query',
    fields: {
        getAllUser: {
            type: new GraphQLList(UserType),
            resolve: QueryResolver.getAllUser
        },
        getUserByID: {
            type: UserType,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve: QueryResolver.getUserByID
        }
    }
});

module.exports = QueryType;