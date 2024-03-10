const userService = require('../services/userService');

const handleLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Check if username and password is provided
        if (!email || !password) {
            return res.status(200).json({
                errCode: 1,
                message: 'Username or Password not present',
                user: {},
            });
        } else {
            const userData = await userService.handleUserLogin(email, password);
            return res.status(200).json({
                errCode: userData.errCode,
                message: userData.message,
                user: userData.userData,
            });
        }
    } catch (error) {
        console.log(error);
    }
};

const getUser = async (req, res) => {
    try {
        const id = req.query.id;
        if (id) {
            const data = await userService.handleGetUser(id);
            return res.status(200).json({
                errCode: 0,
                message: 'Get one user',
                data,
            });
        }

        const data = await userService.handleGetUser();

        return res.status(200).json({
            errCode: 0,
            message: 'Get all users',
            data,
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { handleLogin, getUser };
