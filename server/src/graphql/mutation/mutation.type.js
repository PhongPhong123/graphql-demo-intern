const { GraphQLObjectType } = require('graphql');

const MutationType = new GraphQLObjectType({
    name: 'Root_Mutation',
    fields: {

    }
});

module.exports = MutationType;