const { GraphQLEnumType } = require("graphql");

module.exports = {
    ERoleType: new GraphQLEnumType({
        name: 'ERole',
        values: {
            CUSTOMER: { value: 'customer' },
            ADMIN: { value: 'admin' }
        }
    })
};