const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const model = sequelize.define('User', {
        user_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        age: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: 1
        },
        gender: {
            type: DataTypes.STRING
        },
        desc: {
            type: DataTypes.STRING,
            defaultValue: 'This user has no description'
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: 'customer'
        }
    }, {
        freezeTableName: true,
    });
    return model;
};