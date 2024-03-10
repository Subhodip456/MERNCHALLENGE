const mongoose = require("mongoose")

var userSchema = new mongoose.Schema({
    MemberID:Number,
    MemberName:String
})


const db = mongoose.model("db",userSchema)

module.exports = db