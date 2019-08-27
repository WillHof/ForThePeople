const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const axios = require("axios")
require('dotenv').config()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
require("./routing/apiroutes")(app);
require("./routing/htmlroutes")(app);
const controller = require("./controllers/chamberCon")
const db = require("./models")

function getCongressMembers() {
    axios({
        method: 'get',
        url: "https://api.propublica.org/congress/v1/115/senate/members.json",
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

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening at http://localhost:" + PORT)
        //run the below the first time the server starts
        //getCongressMembers()
    });

})
