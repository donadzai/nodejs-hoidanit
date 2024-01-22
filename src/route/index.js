const homeRouter = require('./home');
const createAccRouter = require('./createAcc');

function routes(app) {
    app.use('/create', createAccRouter);
    app.use('/', homeRouter);
}

module.exports = routes;
