const createNewUserServiceFromService = require('../services/createNewUser');

const createNewUser = async (req, res) => {
    const result = await createNewUserServiceFromService.createNewUserService(req.body);
    return res.status(200).json({
        ...result,
    });
};

module.exports = { createNewUser };
