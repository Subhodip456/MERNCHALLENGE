const Books = require("../model/Books")

exports.getBooks = (req,res) =>{
 Books.find({})
 .then((result)=>{
    res.status(200).send(result)
    console.log("result",result)
 })
 .catch((err)=>{
    res.status(500).send(err)
    console.log("err",err);
 })
}