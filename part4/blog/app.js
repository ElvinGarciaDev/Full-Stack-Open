const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const Blog = require("./models/blog")
const blogRouter = require('./controllers/blog')


const mongoUrl = process.env.mongoUrl

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogRouter)



const PORT = process.env.port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})