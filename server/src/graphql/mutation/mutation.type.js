const { GraphQLObjectType, GraphQLNonNull, GraphQLID } = require('graphql');
const UserType = require('../user/user.type');
const { userInputType, updateUserInputType, IDInput } = require('../../utils/input.type');
const MutationResolver = require('./mutation.resolver');
const { messageResponse } = require('../../utils/response.type');

const MutationType = new GraphQLObjectType({
    name: 'Root_Mutation',
    fields: {
        createNewUser: {
            type: UserType,
            args: {
                user: { type: userInputType }
            },
            resolve: MutationResolver.createNewUser
        },
        deleteUser: {
            type: messageResponse,
            args: {
                input: { type: IDInput }
            },
            resolve: MutationResolver.deleteUser
        },
        updateUser: {
            type: messageResponse,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                input: { type: new GraphQLNonNull(updateUserInputType) }
            },
            resolve: MutationResolver.updateUser
        },
        blockUser: {
            type: messageResponse,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve: MutationResolver.blockUser
        }
    }
});

module.exports = MutationType;