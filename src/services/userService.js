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

module.exports = { handleUserLogin };
