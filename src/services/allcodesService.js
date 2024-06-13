const db = require('../models');

const allcodes = async (type) => {
    try {
        const res = await db.Allcode.findAll({ where: { type: type } });
        return {
            errorCode: 0,
            message: 'Successfully',
            data: res,
        };
    } catch (error) {
        console.log(error);
    }
};

module.exports = { allcodes };
