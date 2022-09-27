module.exports = {
    getAllUser: async (_source, _args, context, _info) => {
        return await context.db.getAllUser();
    },
    getUserByID: async (_source, { id }, context, _info) => {
        return context.db.getUserByID(id);
    }
};