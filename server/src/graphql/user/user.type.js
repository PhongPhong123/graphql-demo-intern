const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLBoolean } = require('graphql');

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        username: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            type: GraphQLString
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
        }
    })
});

module.exports = UserType;