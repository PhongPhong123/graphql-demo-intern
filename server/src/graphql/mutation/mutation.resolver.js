const bcrypt = require('bcrypt');

module.exports = {
    createNewUser: async (_source, { user: { require, optional } }, context, _info) => {
        const { password, ...remainFields } = require;

        const hashedPassword = await bcrypt.hash(password, parseInt(new bcrypt.genSalt(10)));

        const newFields = {
            ...remainFields,
            ...optional,
            password: hashedPassword
        };

        return await context.db.createUserRecordDB(newFields);
    },
    deleteUser: async (_source, { input: { id } }, context, _info) => {
        await context.db.deleteUserByUniqueFieldsDB(id);

        return { message: `user with id: ${id} has been delete` };
    },
    updateUser: async (_source, { id, input: { coreFields, otherFields } }, context, _info) => {
        const { password, ...remainCoreFields } = coreFields;

        let newInfo = {};

        if (password) {
            const hashedPassword = await bcrypt.hash(password, parseInt(new bcrypt.genSalt(10)));

            newInfo = {
                ...otherFields,
                ...remainCoreFields,
                password: hashedPassword,
            };
        } else {
            newInfo = {
                ...otherFields,
                ...remainCoreFields
            };
        }

        await context.db.updateUserDB(id, newInfo);

        return { message: `User with id: ${id} has been update` };
    },
    blockUser: async (_source, { id }, context, _info) => {
        await context.db.updateUserDB(id, { active: false });

        return { message: `User with id: ${id} has been block` };
    }
};