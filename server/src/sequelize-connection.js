const { Sequelize } = require('sequelize');
const { dev } = require('./configs/db.config');
const UserModel = require('./models/user.model');

const sequelize = new Sequelize(dev.database, dev.username, dev.password, {
    host: dev.host,
    dialect: dev.dialect
});

async function testingTheConnection () {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = { sequelize, testingTheConnection };