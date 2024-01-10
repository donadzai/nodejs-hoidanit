const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");

const app = express();
const routes = require("./route");

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

routes(app);

app.listen(3000);
