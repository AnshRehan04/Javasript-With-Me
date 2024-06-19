const express=require("express");
const app=express();
app.use(express.json())
app.post("/health-checkup",(req,res)=>{
    const kidney=req.body.kidney;
    const kidneylength=kidney.length;
    res.send("Your kidney length is "+kidneylength);
})
// global catches
app.use(function(err,req,res,next){
    res.json({
        msg:"Something is wrong!"
    })
})
app.listen(3000,(req,res)=>{
    console.log("done")
})