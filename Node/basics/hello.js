const fs=require("fs");
// // Sync
// fs.writeFileSync("./file3.txt","Hey There!!")

// Async
// fs.writeFile("./file3.txt","Hello async",(err)=>{})

// Reading the file
// const result=fs.readFileSync("./file1.txt","utf-8");
// console.log(result)

// Reading File async It doesnt return anything. It takes callback and then return the result.
// fs.readFile("./file1.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("error",err);
//     }
//     else{
//         console.log(result);
//     }
// })

// To append Text into the file
// fs.appendFileSync("./file1.txt","I am 20 years old\n");//It doesnot override the data it just append the data into the existing file.

// To copy the data of file1 to another file
// fs.cpSync("./file1.txt","./copy.txt")
// fs.unlinkSync("./copy.txt")//To delete the copied file created by above command.

// To check the stats of some file.
// console.log(fs.statSync("./file2.txt").isFile())

// To make A folder.
fs.mkdirSync("my-docs")
