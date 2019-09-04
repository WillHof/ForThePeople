const passport = require('passport')
const LocalStrategy = require('./local')
const User = require('../models/userinfo')

passport.serializeUser(function (user, cb) {
    console.log("serialize user")
    cb(null, user.id);
});
passport.deserializeUser(function (id, cb) {
    User.findById(id, function (err, user) {
        console.log("deserialize")
        cb(err, user);
    });
});

passport.use(LocalStrategy)
module.exports = passport