const axios = require("axios");
const db = require("../models")
// const house = require("../models/houseMembers")
// const senate = require("../models/senateMembers")
module.exports = {
    createSenate: function (req, res) {
        db.Senate_Members.bulkCreate(this.mapToDB(req))

    },
    createHouse: function (req, res) {
        db.House_Members.bulkCreate(this.mapToDB(req))
    },
    mapToDB: function (arr) {
        let dbArr = []
        arr.map(person => dbArr.push({
            "firstname": person.first_name,
            "lastname": person.last_name,
            "birthdate": person.date_of_birth,
            "gender": person.gender,
            "party": person.party,
            "twitter": person.twitter_account,
            "facebook": person.facebook_account,
            "youtube": person.youtube_account,
            "website": person.url,
            "contact": person.contact_form,
            "nextelection": person.next_election,
            "state": person.state,
            "title": person.title
        }))
        return dbArr
    }
}
