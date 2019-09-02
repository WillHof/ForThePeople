const router = require("express").Router();
require('dotenv').config();
const api = require("../controllers/apicontroller")
const database = require("../controllers/chamberCon")

router.route("/api/getSenators")
    .get(api.GetSenators)
router.route("/api/getUpcomingH")
    .get(api.GetHouseBills);
router.route("/api/getUpcomingS")
    .get(api.GetSenateBills)
router.route("/api/getStatements")
    .get(api.GetRecentStatements)
router.route("/api/getBills")
    .get(api.GetRecentUpdatedBills)
    .post(api.SearchBills)
router.route("/api/getSenateMembers")
    .get(database.getSenateMembers)
    .post(database.getMembersbyState)
router.route("/api/getHouseMembers")
    .get(database.getHouseMembers)
router.route("/api/getOne")
    .post(database.getOneMember)
module.exports = router

