const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser')

if (process.env.NODE_ENV !== "production") require("dotenv").config()

let dbUrl = process.env.DB_URL
let dbName = process.env.DB_NAME
let PORT = parseInt(process.env.PORT, 10) || 8005
if (mongoose.connection.readyState === 0) {
    mongoose.connect(dbUrl, {
        dbName, useNewUrlParser: true, keepAlive: true,
        keepAliveInitialDelay: 300000, useUnifiedTopology: true, useCreateIndex: true
    }, error => {
        if (error) throw error
        else console.log("Mongo DB connected")
    })
}

const server = express()
const routes = require("./server/routes")

server.use("/", routes)
server.use(bodyParser.json())

const serverObj = server.listen(PORT, () => { console.log("Server listening in PORT ", PORT) })

module.exports = serverObj