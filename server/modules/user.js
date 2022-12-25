const mongoose = require('mongoose')
const Schema = mongoose.Schema
const postSchema = require('./posts')
var findOrCreate = require('mongoose-findorcreate')

const userSchema = new Schema({
  user_name: {
    type: String, 
    required: true,
  },
  google_id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [postSchema],
})

userSchema.plugin(findOrCreate)

module.exports = mongoose.model('User', userSchema)