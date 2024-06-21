const express=require("express");
const zod=require("zod");
const app=express();
const schema=zod.array(zod.number());
// Zod schemea 
// {
// email =>string
// password => atleast 8 characters
// country => "IN" or "US"
// }

// Zod schema 
// const schema=zod.object({
// email : zod.string(),
// password : zod.string(),
// country : zod.literal("IN").or(zod.literal("US"))
// })

app.use(express.json())
app.post("/health-checkup",(req,res)=>{
    const kidney=req.body.kidney;
    const response=schema.safeParse(kidney);
    // res.send({
    //     response
    // })

    if(!response.success){
        res.status(411).json({
            msg:"Invalid inputs!"
        })
    }
    else{
    const kidneylength=kidney.length;
    res.send("Your kidney length is "+kidneylength);
    }
})
// global catches
// app.use(function(err,req,res,next){
//     res.json({
//         msg:"Something is wrong!"
//     })
// })
app.listen(3000,(req,res)=>{
    console.log("done")
})