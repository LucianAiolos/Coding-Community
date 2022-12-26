const express = require('express')
const router = express.Router()
const passport = require('passport')
const passportSetup = require('../config/passport-setup')
const {
  home,
  signUp,
} = require('../controllers/controller')

router.use(function(req,res,next) {
  res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

router.get('/home', home)
router.post('/sign_up', signUp)

// require('../config/passport-setup')

router.get('/auth/google', passport.authenticate('google', {scope: ['profile']}))

router.get('/auth/google/redirect', 
  passport.authenticate('google', {failureRedirect: '/home'}),
  function(req, res) {
    console.log(req.body)
    res.status(401).json({message: 'failed to google auth'})
  }
)

module.exports = router