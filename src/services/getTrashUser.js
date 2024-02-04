const db = require('../models');

const getTrashUser = async () => {
    try {
        const allUsers = await db.User.findAll({
            raw: true,
            paranoid: false,
        });
        const trashUser = allUsers.filter((user) => {
            return user.softDelete !== null;
        });
        return trashUser;
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getTrashUser };
