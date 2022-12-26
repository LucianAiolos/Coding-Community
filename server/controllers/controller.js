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


const getDashboard = (req, res) => {
  if(req.isAuthenticated()) {
    res.status(200).json({message: 'success at dashboard'})
  }
}


module.exports = { home, signUp, }