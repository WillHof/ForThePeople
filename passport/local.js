const db = require('../models')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
    function (username, password, done) {
        db.userinfo.findOne({
            where: {
                username: username
            }
        }).then(function (user) {
            //,
            // function (err, user) {
            //     console.log(user)
            //     if(err){
            //         return done(err)
            //     }
            if (!user) {
                return done(null, false);
            }

            if (user.password !== password) {
                return done(null, false);
            }
            return done(null, user);
        });
    }
);

module.exports = strategy
