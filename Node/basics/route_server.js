// Creating Route server
require('dotenv').config()
const express=require("express");
const app=express();
const port=4000
app.get("/contact",(req,res)=>{
    res.send("<h1>Hello</h1>")
})

app.get("/twitter",(req,res)=>{
    res.send("Twitter!!")
})
app.get("/",(req,res)=>{
    res.send("Root ");
})
app.listen(process.env.PORT,()=>{
    console.log(`Server Running at ${port}` )
})