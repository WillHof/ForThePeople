const db = require('../models');
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt');
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
            
            if (!bcrypt.compareSync(password,user.password)) {
                return done(null, false);
            }
            return done(null, user);
        });
    }
);

module.exports = strategy
