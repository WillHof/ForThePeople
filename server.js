const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const axios = require("axios");
require('dotenv').config();
const routes = require("./routing/apiroutes.js");
const path = require("path");
const passport = require("./passport");
const controller = require("./controllers/chamberCon")
const db = require("./models")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(require('express-session')({ secret: 'meow', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', require("./routing/auth"));
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

function getCongressMembers() {
    axios({
        method: 'get',
        url: "https://api.propublica.org/congress/v1/116/senate/members.json",
        headers: { 'X-API-Key': process.env.PROAPI },
        dataType: "JSON",
    })
        .then(res => controller.createSenate(res.data.results[0].members))
        .catch(err => console.log(err))
    axios({
        method: 'get',
        url: "https://api.propublica.org/congress/v1/115/house/members.json",
        headers: { 'X-API-Key': process.env.PROAPI },
        dataType: "JSON",
    })
        .then(res => controller.createHouse(res.data.results[0].members))
        .catch(err => console.log(err))
}
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening at http://localhost:" + PORT)

        //run the below the first time the server starts
        // getCongressMembers()
    });

})
