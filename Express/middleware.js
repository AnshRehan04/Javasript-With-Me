const express=require("express");
const app=express();

app.get("/health-checkup",(req,res)=>{
    const username=req.headers.username;
    const password=req.headers.password;
    const kidneyid=req.query.kidneyid;

    if(username!='ansh' || password!='pass'){

        res.status(400).json({mess:"Invalid inputs"})
        return 
    }
        if(kidneyid!=1 && kidneyid!=2){
            res.status(400).json({mess:"Kidney is not Fine !"})
        }
    res.json({mess:"Kidneys is fine "})

})
app.listen(3000,(req,res)=>{
    console.log("Running ");
})