const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const axios = require("axios");
require('dotenv').config();
const routes = require("./routing/apiroutes.js");
const path = require("path");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(passport.initialize());
app.use(passport.session());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
const controller = require("./controllers/chamberCon")
const db = require("./models")

passport.use(new LocalStrategy(
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
));
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
app.get('/success', (req, res) => res.send(req.query.username));
app.post('/auth', passport.authenticate('local', { failureRedirect: "/error" }),
    function (req, res) {
        res.redirect('/success?username=' + req.query.username);
    });
function getCongressMembers() {
    axios({
        method: 'get',
        url: "https://api.propublica.org/congress/v1/116/senate/members.json",
        headers: { 'X-API-Key': process.env.PROAPI },
        dataType: "JSON",
    })
        .then(res => controller.createSenate(res.data.results[0].members))
        .catch(err => console.log(err))
    axios({
        method: 'get',
        url: "https://api.propublica.org/congress/v1/115/house/members.json",
        headers: { 'X-API-Key': process.env.PROAPI },
        dataType: "JSON",
    })
        .then(res => controller.createHouse(res.data.results[0].members))
        .catch(err => console.log(err))
}
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening at http://localhost:" + PORT)

        //run the below the first time the server starts
        //getCongressMembers()
    });

})
