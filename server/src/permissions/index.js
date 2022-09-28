const { rule, shield, allow, and, or } = require('graphql-shield');
const bcrypt = require('bcrypt');
const { decodeToken } = require('../jwt');
const { dev } = require('../configs/token.config');

const decodedTokenAndGetUser = async (token, context) => {
    const decodedToken = decodeToken(token, dev.token_key);
    return await context.db.findUserWithUniqueFieldsDB({
        username: decodedToken.username
    });
};

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

const hasExistedID = rule()(async (_source, { input: { id } }, context, _info) => {
    const user = await context.db.findUserByID(id);

    if (!user) {
        return new Error("This user not existing");
    }

    return true;
});

const hasExistedUserForLogging = rule()(async (_source, { auth: { username, password } }, context, _info) => {
    const user = await context.db.findUserWithUniqueFieldsDB({
        username
    });

    if (!user) {
        return new Error("not found");
    }

    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) {
        return new Error("username or password is incorrect");
    }

    return true;
});

const isAdmin = rule()(async (_source, _args, context, _info) => {
    const splittedAccessToken = context.headers.authorization.split(' ');

    const user = await decodedTokenAndGetUser(splittedAccessToken[1], context);

    if (user.role === 'admin') {
        return true;
    } else {
        return new Error("You is not admin");
    }

});

const isOwner = rule()(async (_source, { input: { id } }, context, _info) => {
    const splittedAccessToken = context.headers.authorization.split(' ');

    const user = await decodedTokenAndGetUser(splittedAccessToken[1], context);

    if (user.user_id === id) {
        return true;
    } else {
        return new Error("You is not owner");
    }
});

const Permissions = shield({
    Root_Mutation: {
        createNewUser: hasExistedData,
        deleteUser: and(hasExistedID, isAdmin),
        updateUser: or(isAdmin, isOwner),
        blockUser: isAdmin
    },
    Root_Query: {
        getUserByID: allow,
        logging: hasExistedUserForLogging
    }
});

module.exports = Permissions;