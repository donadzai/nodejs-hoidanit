const models = require('../models');

const home = async (req, res) => {
    const data = await models.User.findAll();
    res.render('home', { data });
};

module.exports = { home };
