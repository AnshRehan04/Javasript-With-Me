const express=require("express");
const app=express();
const movies=require("./movies.json");


app.get("/api/movies",(req,res)=>{
    res.send(movies)
})
app.get("/api/movies/:year",(req,res)=>{
    const year=Number(req.params.year);
    const users=movies.find(movies=>movies.year===year)
    const image=`<img src="${users.thumbnail}" <h1>${year}</h1>`
    // return res.json(users);
    res.send(image)
})
app.get("/",(req,res)=>{
    res.send("Hello");
})
app.listen(3000,()=>{
    console.log("Running");
})