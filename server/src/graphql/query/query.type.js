const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull, GraphQLInt } = require('graphql');
const UserType = require('../user/user.type');
const QueryResolver = require('./query.resolver');
const { idInputType, loggingInputType } = require('../../utils/input.type');
const { tokenResponse } = require('../../utils/response.type');

const QueryType = new GraphQLObjectType({
    name: 'Root_Query',
    fields: {
        getAllUser: {
            type: GraphQLInt,
            resolve: () => { return 1; }
        },
        getUserByID: {
            type: UserType,
            args: {
                input: {
                    type: idInputType
                }
            },
            resolve: QueryResolver.getUserByID
        },
        logging: {
            type: tokenResponse,
            args: {
                auth: {
                    type: loggingInputType
                }
            },
            resolve: QueryResolver.logging
        }
    }
});

module.exports = QueryType;