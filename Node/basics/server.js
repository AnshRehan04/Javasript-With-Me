// Create Our Own server in Express
const express=require("express");
const port=3000;
const app=express();
app.get("/",function(request,response){
    // console.log(request)
    response.send("Hello")
})
app.listen(port,function(){
    console.log("Server will run at port 3000")
});