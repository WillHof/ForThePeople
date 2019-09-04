const express = require('express')
const router = express.Router()
const User = require('../models/userinfo')
const passport = require('../passport')



// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        return res.json({ user: req.user })
    } else {
        return res.json({ user: null })
    }
})

router.post(
    '/login',
    function (req, res, next) {
        console.log(req.body)
        console.log('================')
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('POST to /login')
        const user = JSON.parse(JSON.stringify(req.user)) // hack
        const cleanUser = Object.assign({}, user)
        if (cleanUser) {
            console.log(`Deleting ${cleanUser.password}`)
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
        return res.json({ msg: 'logging you out' })
    } else {
        return res.json({ msg: 'no user to log out!' })
    }
})

router.post('/signup', (req, res) => {
    const { username, password } = req.body
    // ADD VALIDATION
    User.findOne(
        { where: { 'username': username } })
        .then(userMatch => {
            if (userMatch) {
                return res.json({
                    error: `Sorry, already a user with the username: ${username}`
                })
            }
            const newUser = new User({
                'username': username,
                'password': password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                return res.json(savedUser)
            })
        })
})

module.exports = router
