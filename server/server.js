const express = require('express')
require('dotenv').config()
const cors = require('cors')
const router = require('./routes/router')
const authRoute = require('./routes/auth')
const mongoose = require('mongoose')
const session = require('express-session')
const cookieSession = require('cookie-sessions')
const passport = require('passport')
const passportSetup = require('./config/passport-setup')
mongoose.set('strictQuery', false) // need this to clear warnings.
const app = express()
const mongoDB = process.env.ATLAS_URI
const PORT = process.env.PORT

// require('./config/passport-setup')(passport)

app.use(cookieSession({
  name: "session",
  keys: ['cyperwolf'],
  maxAge: 24 * 60 * 60 * 100,
  secret: process.env.SECRET
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
  origin: ["http://localhost:3000/Coding-Community"],
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  credentials: true,
}))

app.use('/auth', authRoute)

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


