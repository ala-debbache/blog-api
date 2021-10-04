const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const postRouter = require("./routes/post-routes");
const tagRouter = require("./routes/tag-routes");

const app = express();
app.use(bodyParser.json());
app.use(cors({
    "origin": "*",
    "methods": "GET,PATCH,POST,DELETE"
}));
dotenv.config();
app.use("/posts",postRouter);
app.use("/tags",tagRouter);

mongoose.connect(process.env.MONGO_URI,()=>console.log("we're connected to the database"));



app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT||8080,()=>console.log(`server runing on http://localhost:${8080||process.env.PORT}`));
