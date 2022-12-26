const passport = require('passport')
var findOrCreate = require('mongoose-findorcreate')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const User = require('../models/user')
// require('dotenv').config()

console.log('passport')

module.exports = function(passport){
passport.use(new GoogleStrategy ({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: '/auth/google/redirect',
  }, function(token, tokenSecret, profile, done) {
        // Users.findOrCreate({ userId: profile.id, name: profile.displayName }, function(err, user) {
        //   // console.log(err, user)
        //   return done(err, user)
        // })
        console.log(profile)
      }
  ))

  passport.serializeUser(function(user, cb) {
    cb(null, user)
  })
  
  passport.deserializeUser((id, done) => {
    User.findById(id).then((user)=> {
      /// deserialize ??
      done(null, user)
    })
  })
}

module.exports