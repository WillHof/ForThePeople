const axios = require("axios");

module.exports = {
    GetStatementsByMember: function (req, res) {
        axios({
            method: 'get',
            url: `https://api.propublica.org/congress/v1/members/${req.body.id}/statements/${req.body.chamber}.json`,
            headers: { 'X-API-Key': process.env.PROAPI },
            dataType: "JSON",
        })
            .then(response => {
                res.json(response.data)
            })
            .catch(err => res.status(503).json(err))
    },
    GetSenators: function (req, res) {
        axios({
            method: 'get',
            url: "https://api.propublica.org/congress/v1/116/senate/members.json",
            headers: { 'X-API-Key': process.env.PROAPI },
            dataType: "JSON",
        })
            .then(response => {
                res.json(response.data.results[0].members)
            })
            .catch(err => res.status(503).json(err))
    },
    GetHouseBills: function (req, res) {
        axios({
            method: 'get',
            url: `https://api.propublica.org/congress/v1/bills/upcoming/house.json`,
            headers: { 'X-API-Key': process.env.PROAPI },
            dataType: "JSON",
        })
            .then(response => res.json(response.data.results[0].bills))

            .catch(err => res.status(503).json(err))
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
            .catch(err => res.status(503).json(err))
    },
    GetRecentUpdatedBills: function (req, res) {
        axios({
            method: 'get',
            url: `https://api.propublica.org/congress/v1/bills/search.json`,
            headers: { 'X-API-Key': process.env.PROAPI },
            dataType: "JSON",
        })
            .then(response => res.json(response.data.results[0].bills))
            .catch(err => res.status(503).json(err))
    },
    SearchBills: function (req, res) {
        axios({
            method: 'get',
            url: `https://api.propublica.org/congress/v1/bills/search.json?query=${req.body.search}`,
            headers: { 'X-API-Key': process.env.PROAPI },
            dataType: "JSON",
        })
            .then(response => res.json(response.data.results[0].bills))
            .catch(err => res.status(503).json(err))
    }
}