const passport = require('passport')
var findOrCreate = require('mongoose-findorcreate')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const User = require('../models/user')
// require('dotenv').config()

passport.use(new GoogleStrategy ({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
    scope: ['profile', 'email'],
  }, function(token, tokenSecret, profile, callback) {
        // Users.findOrCreate({ userId: profile.id, name: profile.displayName }, function(err, user) {
        //   // console.log(err, user)
        //   return done(err, user)
        // })
        // console.log(profile, 'in profile')
        callback(null, profile)
    }
))

passport.serializeUser(function(user, cb) {
  cb(null, user)
})
  
passport.deserializeUser((user, cb) => {
    // User.findById(id).then((user)=> {
    //   /// deserialize ??
    //   done(null, user)
    // })
    cb(null, user)
})

