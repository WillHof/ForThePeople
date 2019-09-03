const db = require("../models")

module.exports = {

    createSenate: function (req, res) {
        db.Senate_Members.bulkCreate(this.mapToDB(req))
    },
    createHouse: function (req, res) {
        db.House_Members.bulkCreate(this.mapToDB(req))
    },
    //handles api data
    mapToDB: function (arr) {
        let dbArr = []
        arr.map(person => dbArr.push({
            "id": person.id,
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
    },
    getSenateMembers: function (req, res) {
        db.Senate_Members.findAll()
            .then(data => res.json(data))
    },
    getHouseMembers: function (req, res) {
        db.House_Members.findAll()
            .then(data => res.json(data))
    },
    getOneMember: function (req, res) {
        let chamber = req.body.chamber;
        let id = req.body.id
        if (chamber === "Senate") {
            db.Senate_Members.findAll({
                where: {
                    id
                }
            }).then(data => res.json(data[0].dataValues))
        }
        else {
            db.House_Members.findAll({
                where: {
                    id
                }
            }).then(data => res.json(data[0].dataValues))
        }
    },
    getMembersbyState: function (req, res) {
        let chamber = req.body.chamber
        let stateSelect = req.body.state
        if (chamber === "Senate") {
            db.Senate_Members.findAll({
                where: {
                    'state': stateSelect
                }
            }).then(data => res.json(data.map(element => element.dataValues)))
        }
        else {
            db.House_Members.findAll({
                where: {
                    'state': stateSelect
                }
            }).then(data => res.json(data.map(element => element.dataValues)))
        }
    }
}
