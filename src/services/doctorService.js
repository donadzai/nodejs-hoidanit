const db = require('../models');

const getTopDoctor = (limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            const doctors = await db.User.findAll({
                where: { roleId: 'R2' },
                limit: limit,
                include: { model: db.Allcode },
            });

            let doctorArray = [];

            if (doctors.length > 0) {
                for (let index = 0; index < doctors.length; index++) {
                    const doctor = doctors[index].dataValues;
                    const image = await new Buffer.from(doctor.image, 'base64').toString('binary');
                    const doctorAfterChange = { ...doctor, image };
                    doctorArray = [...doctorArray, doctorAfterChange];
                }

                resolve({
                    errorCode: 0,
                    message: 'Get all top doctors successfully!',
                    data: doctorArray,
                });
            } else {
                resolve({
                    errorCode: 0,
                    message: 'There are no top doctors right now!',
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = { getTopDoctor };
