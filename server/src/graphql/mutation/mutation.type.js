const { GraphQLObjectType, GraphQLNonNull, GraphQLID } = require('graphql');
const UserType = require('../user/user.type');
const { userInputType, updateUserInputType } = require('../../utils/input.type');
const MutationResolver = require('./mutation.resolver');
const { messageResponse } = require('../../utils/response.type');

const MutationType = new GraphQLObjectType({
    name: 'Root_Mutation',
    fields: {
        createNewUser: {

        },
        deleteUser: {

        },
        updateUser: {

        }
    }
});

module.exports = MutationType;