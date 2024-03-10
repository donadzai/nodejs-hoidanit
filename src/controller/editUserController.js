const editUserFromService = require('../services/editUserService');

const editUser = async (req, res) => {
    const isResult = await editUserFromService.editUser(req.body);
    if (isResult) {
        return res.status(200).json({ ...isResult });
    }
};

module.exports = { editUser };
