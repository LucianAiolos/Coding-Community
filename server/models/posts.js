const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
  post_title: {
    type: String,
    required: false,
  },
  post_body: {
    type: String,
    required: false,
  },
  post_img: {
    type: String,
    requried: false,
  }
})

module.exports = postSchema