const mongoose = require("mongoose")
const Schema = mongoose.Schema

const authSchema = new Schema({
    userId: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    creationDate: { type: Date, default: Date.now() }
})

const Auth = mongoose.model("Auth", authSchema)

module.exports = Auth