const express = require('express')
const blogRouter = express.Router()
const Blog = require('../models/blogSchema.js')

blogRouter.post('/', (req, res) => {
    const newBlog = new Blog(req.body)
    
    newBlog.save((err, savedBlog) => {
        console.log(err)
        console.log(newBlog)
        if(err){
            console.log('working err')
            return res.status(500).send(err)
        }

        console.log('working real')
        return res.status(201).send(savedBlog)
    })
})

blogRouter.get('/', (req, res) => {
    Blog.find((err, allBlogs) => {
        if(err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(allBlogs)
    })
})

blogRouter.get('/:_id', (req, res) => {
    Blog.findOne({_id: req.params._id}, (err, foundBlog) => {
        if(err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(foundBlog)
    })
})


module.exports = blogRouter
