const getTrashUserFromServices = require('../services/getTrashUser');
const restoreUserFromServices = require('../services/restoreUser');
const forceTrashUserFromServices = require('../services/forceTrashUser');

const getTrashUser = async (req, res) => {
    const trashUser = await getTrashUserFromServices.getTrashUser();
    res.render('trash', { trashUser });
};

const restoreUser = async (req, res) => {
    await restoreUserFromServices.restoreUser(req.params.id);
    res.redirect('/trash');
};

const forceUser = async (req, res) => {
    await forceTrashUserFromServices.forceTrashUser(req.params.id);
    res.redirect('/trash');
};

module.exports = { getTrashUser, restoreUser, forceUser };
