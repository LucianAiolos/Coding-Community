const express = require('express')
const passport = require('passport') 
const signUp = async (req, res) => {
  // res.send('signingup')
}


const home = async (req, res) => {
  console.log('Phone Home!!!')
  res.status(200).json({
    message: 'Home Page',
    data: {location: 'Home Page'}
  })
}

// const authGoogle = () => {
//   console.log('google authenticating')
//   passport.authenticate('google', {scope: ['profile']})
// }

const authGoogle = () => {
  console.log('authing with google')
  passport.authenticate('google', {scope: ['hhtps://googleapis.com/auth/plus.login'] })
}



const googleSecret = () => {
  passport.authenticate('google', {failureRedirect: '/'}),
  function(req, res) {
    res.status(401).json({Message: "Failed to authenticate"})
  }
}




module.exports = { home, signUp, authGoogle, googleSecret}