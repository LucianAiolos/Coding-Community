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
    // console.log(profile.emails[0].value, 'in profile')
        User.findById({ googleId: profile.id }).then((currentUser ) => {
          if(currentUser) {
            console.log('user is: ', currentUser)
            callback(null, currentUser)
          } else {
            new User({
              googleId: profile.id,
              username: profile.displayName,
              email: profile.emails[0].value,
            }).save().then((newUser) => {
              console.log('created new user', newUser)
              callback(null, newUser)
            })
          }
        })  
    }
))

passport.serializeUser(function(user, cb) {
  cb(null, user)
})
  
passport.deserializeUser((user, cb) => {
    User.findById(user.id).then((err, user)=> {
    cb(null, user)
    })
})

