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
    app.get("/api/getUpcomingH", function (req, res) {
        axios({
            method: 'get',
            url: `https://api.propublica.org/congress/v1/bills/upcoming/house.json`,
            headers: { 'X-API-Key': process.env.PROAPI },
            dataType: "text/plain",
        })
            .then(response => res.json(response.data.results[0].bills)).catch(err => console.log(err))
    });
    app.get("/api/getUpcomingS", function (req, res) {
        axios({
            method: 'get',
            url: `https://api.propublica.org/congress/v1/bills/upcoming/senate.json`,
            headers: { 'X-API-Key': process.env.PROAPI },
            dataType: "text/plain",
        })
            .then(response => res.json(response.data.results[0].bills)).catch(err => console.log(err))
    });
    app.get("/api/getStatements", function (req, res) {
        axios({
            method: 'get',
            url: `https://api.propublica.org/congress/v1/statements/latest.json`,
            headers: { 'X-API-Key': process.env.PROAPI },
            dataType: "text/plain",
        })
            .then(response => res.json(response.data.results)).catch(err => console.log(err))
    });
}

