const { Op, where } = require('sequelize');
const { sequelize } = require('./sequelize-connection');
const UserDB = require('./models/user.model')(sequelize);

module.exports = {
    db: {
        createUserRecordDB: async (fields) => {
            return await UserDB.create(fields);
        },
        findUserWithUniqueFieldsDB: async (fields) => {
            return await UserDB.findOne({
                where: {
                    [Op.or]: [
                        { ...(fields.username && { username: fields.username }) },
                        { ...(fields.email && { email: fields.email }) },
                        { ...(fields.user_id && { user_id: fields.user_id }) }
                    ]
                }
            });
        },
        findUserByID: async (id) => {
            return await UserDB.findByPk(id);
        },
        deleteUserByUniqueFieldsDB: async (id) => {
            await UserDB.destroy({
                where: {
                    user_id: id
                }
            });
        },
        updateUserDB: async (id, info) => {
            await UserDB.update(info, {
                where: {
                    user_id: id
                }
            });
        }
    }
};