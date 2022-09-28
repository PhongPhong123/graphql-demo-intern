const { generateToken } = require('../../jwt');
const { dev } = require('../../configs/token.config');

module.exports = {
    getUserByID: async (_source, { input: { id } }, context, _info) => {
        return await context.db.findUserByID(id);
    },
    logging: async (_source, { auth: { username, password } }, _context, _info) => {
        const token = generateToken({ username, password }, dev.token_key, dev.accessLifeTime);
        const refreshToken = generateToken({ username, password }, dev.token_key, dev.refreshLifeTime);
        return { message: "Logging success", token, refreshToken };
    }
};