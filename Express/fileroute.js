const express=require("express")
const app=express();
const fs=require("fs");

app.get("/file/:filename",(req,res)=>{
    const file=req.params.filename;
    console.log(file);

    fs.readFile(file,"utf-8",(err,data)=>{
        res.json({
            data
        })
    })
    // res.json({})
})
const port=3000;
app.listen(port,(req,res)=>{
    console.log("running")
})