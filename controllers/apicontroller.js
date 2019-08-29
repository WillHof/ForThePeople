const axios = require("axios");

module.exports = {
    GetSenators: function (req, res) {
        axios({
            method: 'get',
            url: "https://api.propublica.org/congress/v1/115/senate/members.json",
            headers: { 'X-API-Key': process.env.PROAPI },
            dataType: "JSON",
        })
            .then(response => {
                console.log(response)
                res.json(response.data.results[0].members)
            })
            .catch(err => console.log(err))
    },
    GetHouseBills: function (req, res) {
        axios({
            method: 'get',
            url: `https://api.propublica.org/congress/v1/bills/upcoming/house.json`,
            headers: { 'X-API-Key': process.env.PROAPI },
            dataType: "JSON",
        })
            .then(response => res.json(response.data.results[0].bills))

            .catch(err => console.log(err))
    },
    GetSenateBills: function (req, res) {
        console.log("hits api")
        axios({
            method: 'get',
            url: `https://api.propublica.org/congress/v1/bills/upcoming/senate.json`,
            headers: { 'X-API-Key': process.env.PROAPI },
            dataType: "JSON",
        })
            .then(response => res.json(response.data.results[0].bills))
            .catch(err => res.status(503).json(err));
    },
    GetStatements: function (req, res) {
        axios({
            method: 'get',
            url: `https://api.propublica.org/congress/v1/statements/latest.json`,
            headers: { 'X-API-Key': process.env.PROAPI },
            dataType: "JSON",
        })
            .then(response => res.json(response.data.results))
            .catch(err => console.log(err))
    },
    GetRecentUpdatedBills: function (req, res) {
        axios({
            method: 'get',
            url: `https://api.propublica.org/congress/v1/bills/search.json`,
            headers: { 'X-API-Key': process.env.PROAPI },
            dataType: "JSON",
        })
            .then(response => res.json(response.data.results[0].bills))
            .catch(err => console.log(err))
    },
    SearchBills: function (req, res) {
        axios({
            method: 'get',
            url: `https://api.propublica.org/congress/v1/bills/search.json?query=${req.body.search}`,
            headers: { 'X-API-Key': process.env.PROAPI },
            dataType: "JSON",
        })
            .then(response => res.json(response.data.results[0].bills))
            .catch(err => console.log(err))
    }
}