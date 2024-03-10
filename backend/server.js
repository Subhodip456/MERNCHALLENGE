const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
const dotenv = require("dotenv")
const cors = require('cors')
const bodyParser = require("body-parser")

app.use(cors())

dotenv.config({path:'config.env'})
const uri = process.env.MONGODB_URI
const port = process.env.PORT

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}))
app.use(express.json())

app.use(morgan('tiny'));

mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log(`Mongodb is successfully connected: ${connection.host}`);
})

//routes

const getBooks = require("./routes/route");
app.use('/',getBooks);


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})

