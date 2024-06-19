const express=require("express");
const app=express();
app.use(express.json());

let todo=[];
app.get("/",(req,res)=>{
    res.json(todo);
})

app.post("/",(req,res)=>{
    let newtask=req.body.task;
    todo.push({task:newtask});

    res.json({mess:"done",task:newtask})
})

app.listen(3000,(req,res)=>{
    console.log("Running")
})