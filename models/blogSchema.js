const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Blog = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    blogBody: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Blog', Blog)