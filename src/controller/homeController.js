const db = require('../models');

const home = async (req, res) => {
    const data = await db.User.findAll();
    res.render('home', { data });
};

module.exports = { home };
