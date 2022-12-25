const express = require('express')
const router = express.Router()
const passport = require('passport')
const {
  home,
  signUp,
} = require('../controllers/controller')

router.get('/home', home)
router.post('/sign_up', signUp)
router.get('/auth/google', passport.authenticate('google', {scope: ['hhtps://googleapis.com/auth/plus.login'] })
)

module.exports = router