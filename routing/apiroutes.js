const axios = require("axios");
const router = require("express").Router();
require('dotenv').config();
const api = require("../controllers/apicontroller")

router.route("/api/getSenators")
    .get(api.GetSenators);
router.route("/api/getUpcomingH")
    .get(api.GetHouseBills);
router.route("/api/getUpcomingS")
    .get(api.getSenateBills)
router.route("/api/getStatements", function (req, res) {
    axios({
        method: 'get',
        url: `https://api.propublica.org/congress/v1/statements/latest.json`,
        headers: { 'X-API-Key': process.env.PROAPI },
        dataType: "JSON",
    })
        .then(response => res.json(response.data.results)).catch(err => console.log(err))
});
module.exports = router

