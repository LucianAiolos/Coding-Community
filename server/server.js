const express = require('express')
require('dotenv').config()
const cors = require('cors')
const router = require('./routes/router')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
mongoose.set('strictQuery', false) // need this to clear warnings.

const mongoDB = process.env.ATLAS_URI

const app = express()

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

app.use(cors())

app.listen(PORT, ()=> console.log('Listening on ', PORT))