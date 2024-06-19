const express=require("express");
const app=express();
const user=[{
    name:"Ansh",
    Email:[{
        Fraud:false
    }]
}]

app.use(express.json());
app.get("/",(req,res)=>{
    const emails=user[0].Email;
    const totalmails=emails.length;
    let fraudmails=0;
    for(let i=0;i<emails.length;i++){
        if(emails[i].Fraud){
            fraudmails++;
        }
    }
    const nonfraud=emails.length-fraudmails;
    res.json({
        totalmails,
        fraudmails,
        nonfraud
    })
})

app.post("/",(req,res)=>{
    // Add fraud mail or non fraud mail

    const isfraud=req.body.isfraud;
    user[0].Email.push({
        Fraud:isfraud
    })
    res.json({})
})

app.put("/",(req,res)=>{
    // if mail is fraud make it unfraud
    for(let i=0;i<user[0].Email.length;i++){
        if(user[0].Email[i].Fraud){
            user[0].Email[i].Fraud=false;
        }
    }
    res.json({mess:"Done"})
})

app.delete("/",(req,res)=>{
    // Delete Fraud mail
    const newmails=[];
    for(let i=0;i<user[0].Email.length;i++){
        if(user[0].Email[i].Fraud){
            newmails.push({
                Fraud:false
            })
        }
    }
    user[0].Email=newmails;
    res.json({})

})
app.listen(3000,()=>{
    console.log("running")
})