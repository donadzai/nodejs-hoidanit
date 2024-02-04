const db = require('../models');

const forceTrashUser = async (id) => {
    try {
        await db.User.destroy({
            where: {
                id: id,
            },
            force: true,
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { forceTrashUser };
