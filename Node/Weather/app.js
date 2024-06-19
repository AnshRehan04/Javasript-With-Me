const express=require("express");
// const https=require("https");
const data=require("./data.json")

const app=express();
app.get("/",(req,res)=>{
    res.send("Hello")
})

app.get("/api/services",(req,res)=>{
    res.send(data)
})


app.get("/api/services/:id",(req,res)=>{
    const id=Number(req.params.id) ;
    const users=data.find(data=>data.id===id)
    return res.json(users)

})
app.listen(3000,()=>{
    console.log("Server is running ")
})