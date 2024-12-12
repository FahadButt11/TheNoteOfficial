const express=require("express");
let server= express();


server.get("/",(req,res)=>{
    res.send("Hello World");
})


server.listen(8080,()=>{
    console.log("server started on port 8000...");
})