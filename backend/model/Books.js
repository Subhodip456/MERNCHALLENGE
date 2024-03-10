const mongoose = require("mongoose")

var userSchema = new mongoose.Schema({
    BookID:Number,
    BookName:String,
    NumberOfCopies:Number
})


const Books = mongoose.model("Books",userSchema)

module.exports = Books