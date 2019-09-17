const passport = require('passport')
const LocalStrategy = require('./local')
const db = require('../models')

passport.serializeUser(function (user, cb) {
    console.log("serialize user")
    cb(null, user.id);
});
passport.deserializeUser(function (id, cb) {
    db.userinfo.findOne({
        where: {
            username: id
        }
    })
    .then(function (user, err) {
        console.log("deserialize")
        cb(err, user);
    })
});

passport.use(LocalStrategy)
module.exports = passport