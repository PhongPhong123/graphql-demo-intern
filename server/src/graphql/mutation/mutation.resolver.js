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
    }
};