const createNewUser = require('../services/CRUDservices');

const createAccDisplay = (req, res) => {
    res.render('createAcc');
};

const createAcc = async (req, res) => {
    await createNewUser.createNewUser(req.body);
    res.redirect('/create');
};

module.exports = { createAccDisplay, createAcc };
