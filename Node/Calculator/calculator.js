const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    // res.send("Calculator");
    // res.sendFile()
    res.sendFile(__dirname+"/index.html")
})

// Send back response on submitting the form
app.post("/",(req,res)=>{
    
// To get the data we entered.
    console.log(req.body);
    console.log(req.body.num1);  //To get only value of num1

    var a=parseInt(req.body.num1);
    var b=parseInt(req.body.num2);
    var result=a+b;

    res.send("Thanks For Filling the Form! and the result is " + result)
})


app.listen(3000,()=>{
    console.log("Server running ");
})