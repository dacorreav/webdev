//jshint esversion:6
const { response } = require("express");
const express= require("express");


const app = express();

app.get("/", (request, response)=>{
response.send(" <h1>Hello</h1> ");    
});

app.get("/contact", (request, response)=>{
    response.send(" <h1>Contact me</h1> ");    
    });

    app.get("/about", (request, response)=>{
        response.send(" <h1>I'm david</h1> ");    
        });


        app.get("/hobbies", (request, response)=>{
            response.send(" <h1>warhammo</h1> ");    
            });

app.listen(3000, ()=>{console.log("serverok");});