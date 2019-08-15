const axios = require("axios");
require('dotenv').config();
module.exports = function (app) {
    app.get("/api/getSenators", function (req, res) {
        axios({
            method: 'get',
            url: "https://api.propublica.org/congress/v1/115/senate/members.json",
            headers: { 'X-API-Key': process.env.PROAPI },
            dataType: "JSON",
        })
            .then(response => res.json(response.data.results[0].members)).catch(err => console.log(err))
    });
    app.get("/api/getUpcoming", function (req, res) {
        axios({
            method: 'get',
            url: `https://api.propublica.org/congress/v1/bills/upcoming/${req}.json`,
            headers: { 'X-API-Key': process.env.PROAPI },
            dataType: "JSON",
        })
            .then(response => console.log(response)).catch(err => console.log(err))
    });
}

