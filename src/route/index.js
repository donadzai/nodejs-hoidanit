const homeRouter = require('./home');
const createAccRouter = require('./createAcc');
const storedRouter = require('./stored');
const trashRouter = require('./trash');
const loginRouter = require('./login');
const userRouter = require('./user');
const createNewUserRouter = require('./createNewUser');
const editUser = require('./editUser');
const deleteUser = require('./deleteUser');

function routes(app) {
    app.use('/create', createAccRouter);
    app.use('/stored', storedRouter);
    app.use('/trash', trashRouter);
    app.use('/api/login', loginRouter);
    app.use('/api/user', userRouter);
    app.use('/api/create-new-user', createNewUserRouter);
    app.use('/api/edit-user', editUser);
    app.use('/api/delete-user', deleteUser);
    app.use('/', homeRouter);
}

module.exports = routes;
