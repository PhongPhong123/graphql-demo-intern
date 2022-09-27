const { rule, shield } = require('graphql-shield');

const hasExistedData = rule()(async (_source, { user: { require } }, context, _info) => {
    const existing = await context.db.findUserWithUniqueFieldsDB({
        username: require.username,
        email: require.email
    });
    if (existing) {
        return new Error("username or email is has already exist");
    }
    return true;
});

const Permissions = shield({
    Root_Mutation: {
        createNewUser: hasExistedData
    }
});

module.exports = Permissions;