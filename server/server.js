const express = require('express')
require('dotenv').config()
const cors = require('cors')
const router = require('./routes/router')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const passportSetup = require('./config/passport-setup')
mongoose.set('strictQuery', false) // need this to clear warnings.

require('./config/passport-setup')(passport)

const app = express()

const mongoDB = process.env.ATLAS_URI
const PORT = process.env.PORT


app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'keyboard cat',
  //cookie only works on https
  // cookie: { secure: true },
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
  origin: ["http://localhost:3000"],
  methods: "GET,POST,PUT,DELETE,OPTIONS",
}))
app.use(express.json())
app.use(router)
// app.use(function(req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

mongoose.connect(mongoDB)
.then(()=> {console.log('Connected to DB')}),
err => {console.log(err, 'Error Connecting to DB')}

app.listen(PORT, ()=> console.log('Listening on ', PORT))


