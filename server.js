const express = require ('express')
const app = express()
const PORT = 6066
const mongoose = require('mongoose')

app.use(express.json())

mongoose.connect(
    'mongodb://localhost:27017/blog',
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    }, () => {
        console.log('Database connected, good job!')
    })

    app.use('/blogs', require('./routes/blogRoutes'))

    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))