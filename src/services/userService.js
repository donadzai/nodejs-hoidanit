const db = require('../models');
const bcrypt = require('bcryptjs');

const handleUserLogin = async (email, password) => {
    try {
        const user = await checkUserEmail(email);

        const userData = {};

        if (user) {
            const isPassWord = bcrypt.compareSync(password, user.password);

            if (isPassWord) {
                userData.errCode = 0;
                userData.message = `Login seccessfully !`;
                delete user.password;
                userData.userData = user;
                return userData;
            } else {
                userData.errCode = 2;
                userData.message = `Your passwaord isn't true. Please try again !`;
                userData.userData = {};
                return userData;
            }

            ///
        } else {
            userData.errCode = 1;
            userData.message = `Your email isn't exist`;
            userData.userData = {};
            return userData;
        }
    } catch (error) {
        console.log(error);
    }
};

const checkUserEmail = async (email) => {
    try {
        const user = await db.User.findOne({
            where: { email: email },
            raw: true,
        });

        if (user) {
            return user;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
    }
};

const handleGetUser = async (id) => {
    if (id) {
        const user = await db.User.findOne({
            raw: true,
            where: { id: id },
            attributes: {
                exclude: ['password'],
            },
        });

        if (user.image) {
            const image = await new Buffer.from(user.image, 'base64').toString('binary');

            const userAfterChange = { ...user, image };

            return userAfterChange;
        }

        return user;
    }

    return await db.User.findAll({
        raw: true,
        attributes: {
            exclude: ['password'],
        },
    });
};

const handleGetTrashUser = async () => {
    return await db.User.findAll({
        raw: true,
        paranoid: false,
        attributes: {
            exclude: ['password'],
        },
    });
};

const handleRestoreUser = async (id) => {
    await db.User.restore({
        where: { id: id },
    });
};

const handleGetAllCodes = (type) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (type) {
                const respond = await db.Allcode.findAll({ where: { type: type } });
                resolve({
                    errCode: 0,
                    message: 'Sucessfully',
                    data: respond,
                });
            } else {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing paramers',
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = { handleUserLogin, handleGetUser, handleGetTrashUser, handleRestoreUser, handleGetAllCodes };
