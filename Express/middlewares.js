const express=require("express");
const app=express();
function calculaterequest(req,res,next){
    let calculate=0;
    calculate++;
    console.log(calculate)
    next();
}

app.use(calculaterequest);
app.post("/health-checkup",(req,res)=>{
    res.json({
        msg:"done"
    })
})
app.get("/health-checkup",(req,res)=>{
    res.send("Done")
})

app.listen(3000,(req,res)=>{
    console.log("running");
})