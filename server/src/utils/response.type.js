const { GraphQLObjectType, GraphQLString } = require("graphql");

module.exports = {
    messageResponse: new GraphQLObjectType({
        name: 'Message_Response',
        fields: () => ({
            message: { type: GraphQLString }
        })
    }),
    tokenResponse: new GraphQLObjectType({
        name: "Token_Response",
        fields: () => ({
            message: { type: GraphQLString },
            token: { type: GraphQLString },
            refreshToken: { type: GraphQLString }
        })
    })
};