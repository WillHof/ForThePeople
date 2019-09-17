const router = require("express").Router();
require('dotenv').config();
const api = require("../controllers/apicontroller")
const database = require("../controllers/chamberCon")


//api routes
router.route("/api/getSenators")
    .get(api.GetSenators)   //gets senators from propublica api
router.route("/api/getUpcomingH")
    .get(api.GetHouseBills);    //gets bills from upcoming bills route
router.route("/api/getUpcomingS")
    .get(api.GetSenateBills)    //gets bills from upcoming bills route (should combine routes)
router.route("/api/getStatements")
    .get(api.GetRecentStatements)   //get all statements
    .post(api.searchStatements)     //gets statements by search term
router.route("/api/getBills")
    .get(api.GetRecentUpdatedBills) //all recent bills
    .post(api.SearchBills) //search bills
router.route("/api/getIntroducedBills")
    .post(api.GetPersonIntroducedBills) //get bills introduced OR updated by a given senator, takes two args

//database routes
router.route("/api/getSenateMembers")
    .get(database.getSenateMembers) //pulls senators from database
    .post(database.getMembersbyState) //
router.route("/api/getHouseMembers")
    .get(database.getHouseMembers) //pulls representatives from db
router.route("/api/getOne")
    .post(database.getOneMember)
router.route("/api/saveToUser")
    .post(database.watchCongressMember)
module.exports = router

