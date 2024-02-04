const db = require('../models');

const restoreUser = async (id) => {
    try {
        await db.User.restore({
            where: {
                id: id,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { restoreUser };
