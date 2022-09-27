const { Op } = require('sequelize');
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
                        { username: fields.username },
                        { email: fields.email }
                    ]
                }
            });
        }
    }
};