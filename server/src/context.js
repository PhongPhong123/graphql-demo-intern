const UserDB = require('./models/user');
const bcrypt = require('bcrypt');

module.exports = {
    db: {
        addNewUserToDB: async (userInfo) => {
            const hashedPassword = await bcrypt.hash(userInfo.password, parseInt(new bcrypt.genSalt(10)));

            const newUser = new UserDB({
                ...userInfo,
                password: hashedPassword
            });

            return await newUser.save();
        },
        deleteUserFromDB: async (id) => {
            await UserDB.deleteOne({ id });
        },
        updateUserFromDB: async (id, newOptions) => {
            const { coreFields, otherFields } = newOptions;
            let newInfo = {};

            if (coreFields.password) {
                const hashedPassword = await bcrypt.hash(coreFields.password, parseInt(new bcrypt.genSalt(10)));

                newInfo = {
                    ...otherFields,
                    ...coreFields,
                    password: hashedPassword
                };

                return await UserDB.findByIdAndUpdate(id, {
                    $set: newInfo
                });
            }

            newInfo = {
                ...coreFields,
                ...otherFields
            };

            return await UserDB.findByIdAndUpdate(id, {
                $set: newInfo
            });
        },
        getAllUser: async () => {
            return await UserDB.find({});
        },
        getUserByID: async (id) => {
            return await UserDB.findById(id);
        }
    }
};