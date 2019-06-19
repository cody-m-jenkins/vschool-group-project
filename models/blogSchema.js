const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Blog = new Schema({
    title: {
        type: String,
        required: true,
        default: "No title provided"
    },
    // description: {
    //     type: String,
    //     required: true,
    //     default: "No description provided"
    // },
    // author: {
    //     type: String,
    //     required: true,
    //     default: "Anonymous"
    // },
    // blogBody: {
    //     type: String,
    // },
    // imgUrl: {
    //     type: String,
    //     trim: true
    // },
    // tags: {
    //     type: String
    // },
    // date: {
    //     type: Date
    // }
})

module.exports = mongoose.model('Blog', Blog)