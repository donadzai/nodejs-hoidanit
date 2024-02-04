const db = require('../models');

const deleteSoft = async (id) => {
    try {
        await db.User.destroy({
            where: {
                id: id,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { deleteSoft };
