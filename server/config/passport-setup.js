const passport = require('passport')
var findOrCreate = require('mongoose-findorcreate')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const User = require('../models/user')
require('dotenv').config()

passport.serializeUser(function(user, cb) {
  cb(null, user)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then((user)=> {
    /// deserialize ??
    done(null, user)
  })
})

console.log('in passport')

passport.use(new GoogleStrategy ({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: 'http://localhost:9000/auth/google/secret'
},
  function(token, tokenSecret, profile, done) {
    // Users.findOrCreate({ userId: profile.id, name: profile.displayName}, function(err, user) {
    //   return done(err, user)
    // })
    console.log('passport callback function fired')
    console.log(profile, token, tokenSecret)

    function(token, tokenSecret, profile, done) {
      Users.findOrCreate({ userId: profile.id, name: profile.displayName }, function(err, user) {
        return done(err, user)
      })
    }
  }
))

module.exports