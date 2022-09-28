const jsonwebtoken = require('jsonwebtoken');

const generateToken = (payload, key, lifeTime) => {
    try {
        const token = jsonwebtoken.sign(payload, key, { expiresIn: lifeTime });
        return token;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const decodeToken = (token, key) => {
    return jsonwebtoken.verify(token, key);
};

module.exports = {
    generateToken,
    decodeToken
};