const homeRouter = require('./home');
const createAccRouter = require('./createAcc');
const storedRouter = require('./stored');
const trashRouter = require('./trash');
const loginRouter = require('./login');
const userRouter = require('./user');

function routes(app) {
    app.use('/create', createAccRouter);
    app.use('/stored', storedRouter);
    app.use('/trash', trashRouter);
    app.use('/api/login', loginRouter);
    app.use('/api/user', userRouter);
    app.use('/', homeRouter);
}

module.exports = routes;
