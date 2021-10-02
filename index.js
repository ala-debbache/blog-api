const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes");

const app = express();
app.use(bodyParser.json());
app.use(cors({
    "origin": "*",
    "methods": "GET,PATCH,POST,DELETE"
}));
dotenv.config();
app.use("/posts",router);

mongoose.connect(process.env.MONGO_URI,()=>console.log("we're connected to the database"));



app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
});

app.listen(8080||process.env.PORT,()=>console.log(`server runing on http://localhost:${8080||process.env.PORT}`));
