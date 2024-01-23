const db = require('../models');

const getUser = async () => {
    try {
        const users = await db.User.findAll({
            raw: true,
        });
        return users;
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getUser };
