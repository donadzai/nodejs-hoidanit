const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const db = require('../models');

const createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordByScrypjs = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordByScrypjs,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phoneNumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
            });

            resolve();
        } catch (error) {
            reject(error);
        }
    });
};

const hashUserPassword = (password) => {
    return new Promise((resolve, reject) => {
        try {
            const hashPassword = bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = { createNewUser };
