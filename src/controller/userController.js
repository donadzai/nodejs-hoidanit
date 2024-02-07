const userService = require('../services/userService');

const handleLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Check if username and password is provided
        if (!email || !password) {
            return res.status(400).json({
                errCode: 1,
                message: 'Username or Password not present',
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

module.exports = { handleLogin };