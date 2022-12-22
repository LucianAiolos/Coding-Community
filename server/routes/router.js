const express = require('express')
const router = express.Router()
const {
  home,
  signUp,
} = require('../controllers/controller')

// router.get('/test', (req,res) => {
//   res.send('testing connection')
// })

// http://localhost:9000/

router.get('/home', home)
router.post('/sign_up', signUp)

module.exports = router