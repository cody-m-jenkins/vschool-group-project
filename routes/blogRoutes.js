const express = require('express')
const blogRouter = express.Router()
const Blog = require('../models/blogSchema.js')

blogRouter.post('/', (req, res) => {
    const newBlog = new Blog(req.body)

    newBlog.save((err, savedBlog) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(savedBlog)
    })
})

module.exports = blogRouter