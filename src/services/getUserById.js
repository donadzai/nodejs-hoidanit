const db = require('../models');

const getUserById = async (id) => {
    const user = await db.User.findOne({ where: { id: id }, raw: true });
    if (user === null) {
        console.log('Not found!');
    } else {
        return user;
    }
};

module.exports = {
    getUserById,
};
