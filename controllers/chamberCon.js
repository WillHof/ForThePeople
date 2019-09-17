const db = require("../models")

module.exports = {

    createSenate: function (req, res) {
        db.Senate_Members.bulkCreate(this.mapToDB(req))
    },
    createHouse: function (req, res) {
        db.House_Members.bulkCreate(this.mapToDB(req))
    },
    //handles congressmember api data
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
    },
    watchCongressMember: function (req, res) {
        //does record already exist
        db.userWatchList.findAll({
            where: {
                userId: req.body.userId,
                congId: req.body.congId
            }
        }).then(data => {
            //if record doesn't exist create it
            if (data.length === 0) {
                if (req.body.chamber === 'House') {
                    db.userWatchList.create({
                        userId: req.body.userId,
                        congId: req.body.congId,
                        chamber: req.body.chamber,
                        HouseMemberId: req.body.congId,
                        userinfoId: req.body.userId
                    }).then(success => res.json(success))
                }
                if (req.body.chamber === 'Senate') {
                    db.userWatchList.create({
                        userId: req.body.userId,
                        congId: req.body.congId,
                        chamber: req.body.chamber,
                        SenateMemberId: req.body.congId,
                        userinfoId: req.body.userId
                    }).then(success => res.json(success))
                }
            }
            else {
                res.status(403)
            }
        }).catch(err => res.status(503).json(err))

    },
    getUsersMembers: function (req, res) {
        db.userWatchList.findAll({
            where: {
                userId: req.body.userId
            },
            include: {
                model: db.Senate_Members
            }
        }).then(data => res.json(data))
            .catch(err => res.json(err))

    }
}
