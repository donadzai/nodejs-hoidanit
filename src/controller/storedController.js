const getUserFromServices = require('../services/getUser');
const getUserByIdFromServices = require('../services/getUserById');
const updateUserFromServices = require('../services/updateUser');
const deleteSoftFromServices = require('../services/deleteSoft');

const getUser = async (req, res) => {
    const users = await getUserFromServices.getUser();
    res.render('stored', { users });
};

const editUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await getUserByIdFromServices.getUserById(id);
        res.render('editAcc', { user });
    } catch (error) {
        console.log(error);
    }
};

const updateUser = async (req, res) => {
    const data = req.body;
    await updateUserFromServices.updateUser(data);
    res.redirect('/stored');
};

const deleteUser = async (req, res) => {
    await deleteSoftFromServices.deleteSoft(req.params.id);
    res.redirect('/stored');
};

module.exports = { getUser, editUser, updateUser, deleteUser };
