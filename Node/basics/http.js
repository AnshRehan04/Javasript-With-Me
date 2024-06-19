const http=require("http");
const fs=require("fs");
const url=require("url");
const myserver=http.createServer((req,res)=>{
    // console.log("New Req");
    // console.log(req.headers);//Extra informations
    const log=`${Date.now()}:${req.url}:New Data\n`
    const myurl=url.parse(req.url);
    console.log(myurl);
    if(req.url==="/favicon.ico") return res.end();
    // console.log(req)
    fs.appendFile("./log.txt",log,(err,data)=>{
        // res.end("Hello again")
        switch(req.url){
        case "/":
            res.end("Home");
            break;
            case "/contact":
            res.end("Contact");
            default:
                res.end("404 Not Found")
        }
        
    })
    // res.end("Hello From server");
})

myserver.listen(4000,()=>{
    console.log("Server Started")
})