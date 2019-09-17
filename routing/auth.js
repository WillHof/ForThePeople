const express = require('express')
const router = express.Router()
const db = require('../models/')
const passport = require('../passport')
const bcrypt = require('bcrypt');
const saltRounds = 10;
// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
    if (req.user) {
        return res.json({ user: req.user })
    } else {
        return res.json({ user: null })
    }
})

router.post(
    '/login',
    passport.authenticate('local'),
    (req, res) => {
        const user = JSON.parse(JSON.stringify(req.user)) // hack
        const cleanUser = Object.assign({}, user)
        if (cleanUser) {
            delete cleanUser.password
        }
        //res.redirect('/')
        res.json({ user: cleanUser })
    }
)

router.post('/logout', (req, res) => {
    if (req.user) {
        req.session.destroy()
        res.clearCookie('connect.sid') // clean up!
        return res.json({ 
            data:'',
            msg: 'You have been logged out.' 
        })
    } else {
        return res.json({ msg: 'no user to log out!' })
    }
})

router.post('/signup', (req, res) => {
    const { username, password } = req.body
    // ADD VALIDATION
    db.userinfo.findOne(
        { where: { 'username': username } })
        .then(userMatch => {
            if (userMatch) {
                return res.status(304).json({
                    error: `Sorry, already a user with the username: ${username}`
                })
            }
            else {
                bcrypt.genSalt(saltRounds,function(err,salt){
                    bcrypt.hash(password,salt,function(err,hash){
                        db.userinfo.create({
                            username,
                            'password':hash
                        }).then(savedUser => res.json(savedUser))
                        .catch(err => res.status(503).json(err))
                    })
                })
               
            }
        })
})

module.exports = router
