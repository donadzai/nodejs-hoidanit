const express = require('express');
const Handlebars = require('handlebars');
const { engine } = require('express-handlebars');
const path = require('path');
const connectDB = require('./config/connectDB');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

const app = express();
const routes = require('./route');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('.hbs', engine({ extname: '.hbs', handlebars: allowInsecurePrototypeAccess(Handlebars) }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

connectDB();

routes(app);

app.listen(3000);
