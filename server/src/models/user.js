const { Schema } = require('mongoose');

const UserSchemaDB = new Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        min: 3,
        max: 10
    },
    password: {
        type: String,
        require: true,
        min: 3,
        max: 10
    },
    email: {
        type: String,
        unique: true
    },
    age: {
        type: Number,
        default: 0
    },
    gender: {
        type: String,
        default: 'unknown'
    },
    desc: {
        type: String,
        max: 50,
        default: 'User has no description'
    },
    active: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true
    }
);

module.exports = UserSchemaDB;