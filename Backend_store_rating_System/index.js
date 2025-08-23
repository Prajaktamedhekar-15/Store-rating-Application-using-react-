
let app=require("./src/app.js");
require("dotenv").config();
let port=process.env.Port;


app.listen(port,()=>{
    console.log("Server Started");
});


