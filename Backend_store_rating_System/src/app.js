let express=require("express");
let  conn=require("./config/db.js");
const bodyParser = require("body-parser");
let cors=require("cors");

let router=require("./router/router.js");

require('dotenv').config();

let app=express();

app.use(cors());
app.use(express.urlencoded ({extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use("/",router);



module.exports=app;
