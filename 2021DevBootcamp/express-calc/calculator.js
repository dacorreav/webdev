//jshint esversion:6

const express=require("express");
const app=express();
const port=3000;

app.use(express.urlencoded());

app.get("/",(req,res)=>{
res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator",(req,res)=>{
    res.sendFile(__dirname + "/bmiCalculator.html");
    });

app.post("/bmiCalculator", (req,res)=>{
    res.send(`<h1>Your BMI is ${req.body.w/Math.pow(req.body.h,2)} homie<h1>`);
});

app.post("/", (req,res) => {
let num1=Number(req.body.num1);
let num2=Number(req.body.num2);
res.send(`<h1>You got a ${num1+num2} homie<h1>`);
});

app.listen(port, ()=>{console.log(`server OK on port ${port}`);});
