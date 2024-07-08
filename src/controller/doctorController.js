const doctorService = require('../services/doctorService');

const getAllTopDoctors = async (req, res) => {
    try {
        const respond = await doctorService.getTopDoctor(9);
        return res.status(200).json({
            data: respond,
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getAllTopDoctors };
