const db = require('../models');
const getUserFromServices = require('../services/getUser');

const getUser = async (req, res) => {
    const users = await getUserFromServices.getUser();
    res.render('stored', { users });
};

module.exports = { getUser };
