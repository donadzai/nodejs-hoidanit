const allcodesService = require('../services/allcodesService');

const allcodes = async (req, res) => {
    if (req.params) {
        const data = await allcodesService.allcodes(req.params.type);
        return res.status(200).json({
            data,
        });
    } else {
        return res.status(200).json({
            errorCode: 1,
            errorMessage: 'Missing params',
        });
    }
};

module.exports = { allcodes };
