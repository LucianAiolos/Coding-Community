const mongoose = require('mongoose')
const Schema = mongoose.Schema
const postSchema = require('./posts')
var findOrCreate = require('mongoose-findorcreate')

const userSchema = new Schema({
  username: {
    type: String, 
    required: true,
  },
  googleId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  posts: [postSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

userSchema.plugin(findOrCreate)

module.exports = mongoose.model('User', userSchema)