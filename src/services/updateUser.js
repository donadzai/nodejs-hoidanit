const db = require('../models');

const updateUser = async (data) => {
    const user = await db.User.findOne({ where: { id: data.id }, raw: true });
    const newUser = { ...user, ...data };
    await db.User.update(newUser, {
        where: {
            id: data.id,
        },
    });
};

module.exports = { updateUser };
