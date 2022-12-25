const express = require('express')
const router = express.Router()
// const passport = require('passport')
const {
  home,
  signUp,
  authGoogle,
  googleSecret,
} = require('../controllers/controller')

router.get('/home', home)
router.post('/sign_up', signUp)
router.get('/auth/google', authGoogle)
router.get('/auth/google/secret', googleSecret)


module.exports = router