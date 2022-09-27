module.exports = {
    createNewUser: (_source, { user }, context, _info) => {
        return context.db.addNewUserToDB(user);
    },
    deleteUser: async (_source, { id }, context, _info) => {
        await context.db.deleteUserFromDB(id);
        return { message: 'Deleted user' };
    },
    updateUser: async (_source, { id, input }, context, _info) => {
        return await context.db.updateUserFromDB(id, input);
    }
};