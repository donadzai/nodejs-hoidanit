const db = require('../models');

const softDeleteUser = async ({ id }) => {
    try {
        await db.User.destroy({
            where: {
                id: id,
            },
        });

        return {
            errCode: 0,
            message: 'Your email is moved to trash successfully!',
        };
    } catch (error) {
        console.log(error);
    }
};

const destroyUser = async (id) => {
    try {
        await db.User.destroy({
            where: {
                id: id,
            },
            force: true,
        });

        return {
            errCode: 0,
            message: 'Your email is deleted successfully!',
        };
    } catch (error) {
        console.log(error);
    }
};

module.exports = { softDeleteUser, destroyUser };
