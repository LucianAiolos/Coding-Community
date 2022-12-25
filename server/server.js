const express = require('express')
require('dotenv').config()
const cors = require('cors')
const router = require('./routes/router')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
mongoose.set('strictQuery', false) // need this to clear warnings.
var findOrCreate = require('mongoose-findorcreate')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

const app = express()
app.use(cors())

const mongoDB = process.env.ATLAS_URI
const PORT = process.env.PORT

app.use(router)
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: process.env.SECRET
}))
app.use(passport.initialize())
app.use(passport.session())

mongoose.connect(mongoDB)
.then(()=> {console.log('Connected to DB')}),
err => {console.log(err, 'Error Connecting to DB')}


passport.serializeUser(function(user, cb) {
  cb(null, user)
})

passport.use(new GoogleStrategy ({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: 'http://localhost:9000/auth/google/secret'
},
  function(token, tokenSecret, profile, done) {
    Users.findOrCreate({ userId: profile.id, name: profile.displayName}, function(err, user) {
      return done(err, user)
    })
  }
))



app.listen(PORT, ()=> console.log('Listening on ', PORT))