const deleteUserFromService = require('../services/deleteUserService');

const softDeleteUser = async (req, res) => {
    const isResult = await deleteUserFromService.softDeleteUser(req.body);
    return res.status(200).json(isResult);
};

const destroyUser = async (req, res) => {
    const isResult = await deleteUserFromService.destroyUser(req.body);
    return res.status(200).json(isResult);
};

module.exports = { softDeleteUser, destroyUser };
