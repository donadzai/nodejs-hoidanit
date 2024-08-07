const db = require('../models');
const bcrypt = require('bcryptjs');

const createNewUserService = async (data) => {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(data.password, salt);
    const isEmail = await db.User.findOne({ where: { email: data.email } });
    if (isEmail) {
        return {
            errCode: 1,
            message: 'Your email exists',
        };
    }
    try {
        await db.User.create({
            email: data.email,
            password: hashPassword,
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            phonenumber: data.phoneNumber,
            gender: data.gender,
            roleId: data.roleId,
            positionId: data.positionId,
            image: data.image,
        });

        return {
            errCode: 0,
            message: 'New user is created sucessfully!',
        };
    } catch (error) {
        console.log(error);
    }
};

module.exports = { createNewUserService };
