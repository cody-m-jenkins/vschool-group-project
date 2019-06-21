const express = require ('express')
const app = express()
const PORT = process.env.PORT || 5000 
const mongoose = require('mongoose')
const path = require('path')
require("dotenv").config()

app.use(express.json())
app.use(express.static(path.join(__dirname, "client", "build")))

mongoose.connect(
    process.env.mongolab-convex-90600 || 'mongodb://localhost:27017/blog',
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    }, () => {
        console.log('Database connected, good job!')
    })

    app.use('/blogs', require('./routes/blogRoutes'))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"))
    })

    app.listen(PORT, () => console.log(`Server is listening `))