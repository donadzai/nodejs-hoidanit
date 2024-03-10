const db = require('../models');
const bcrypt = require('bcryptjs');

const editUser = async (data) => {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(data.password, salt);
    const newData = { ...data, password: hashPassword };
    try {
        await db.User.update(newData, {
            where: {
                id: data.id,
            },
        });

        return {
            errCode: 0,
            message: 'Your user is edited sucessfully!',
        };
    } catch (error) {
        console.log(error);
    }
};

module.exports = { editUser };
