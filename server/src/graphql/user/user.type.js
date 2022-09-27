const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLID } = require('graphql');
const { ERoleType } = require('../../utils/enum.type');

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        user_id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        username: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        age: {
            type: GraphQLInt
        },
        gender: {
            type: GraphQLString
        },
        desc: {
            type: GraphQLString
        },
        active: {
            type: GraphQLBoolean
        },
        role: {
            type: ERoleType
        }
    })
});

module.exports = UserType;