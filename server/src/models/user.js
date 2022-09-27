const { Schema, model } = require('mongoose');

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
        unique: true,
        require: true
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
    },
    role: {
        type: String,
        default: 'customer'
    }
},
    {
        timestamps: true
    }
);

module.exports = model('User', UserSchemaDB);