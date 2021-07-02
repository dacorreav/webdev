//jshint esversion:6
const express = require("express");
const app=express();
const https=require("https");
const { userInfo } = require("os");

app.use(express.urlencoded());
app.use(express.static("public"));
app.get("/",(req,res)=>{
res.sendFile(__dirname + "/signup.html");
});
app.post("/",(req,res)=>{
    res.set("Content-Type", "text/html");
    let query = [req.body.floatingFN,req.body.floatingLN,req.body.floatingMail];
    console.log(query);
}

);
app.listen(3000, (req,res)=>{
console.log("Server OK on 3000");
});