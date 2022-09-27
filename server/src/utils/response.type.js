const { GraphQLObjectType, GraphQLString } = require("graphql");

module.exports = {
    messageResponse: new GraphQLObjectType({
        name: 'Message_Response',
        fields: () => ({
            message: { type: GraphQLString }
        })
    })
};