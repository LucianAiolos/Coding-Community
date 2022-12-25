const express = require('express')

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



module.exports = { home, signUp }