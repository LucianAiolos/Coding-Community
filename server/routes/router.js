const express = require('express')
const router = express.Router()
const passport = require('passport')
const passportSetup = require('../config/passport-setup')
const {
  home,
  signUp,
} = require('../controllers/controller')

// router.use(function(req,res,next) {
//   res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// })

// router.get('/home', home)
// router.post('/sign_up', signUp)

module.exports = router