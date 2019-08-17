const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
require('dotenv').config()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
require("./routing/apiroutes")(app);
require("./routing/htmlroutes")(app);

const db = require("./models")
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening at http://localhost:" + PORT)
    })
})
