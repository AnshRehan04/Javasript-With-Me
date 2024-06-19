const express=require("express");
const app=express();
// app.use((req,res,next)=>{
//     console.log("Hello middleware 1")
//     res.end("Done")
//     next();
// })

// app.use((req,res,next)=>{
//     console.log("Hello middleware 2")
//     next()
// })

function middle1(req,res,next){
    console.log("Hello middleware 1")
    res.end("Done")
    next();
}

function middle2(req,res,next){
    console.log("Hello middleware 2")
    res.end("Done")
    next();
}
app.get("/users",middle1,middle2,(req,res)=>{
    res.send("Hello");
})
app.listen(3000,(req,res)=>{
    console.log("Done")
})