const homeRouter = require('./home');
const createAccRouter = require('./createAcc');
const storedRouter = require('./stored');

function routes(app) {
    app.use('/create', createAccRouter);
    app.use('/stored', storedRouter);
    app.use('/', homeRouter);
}

module.exports = routes;
