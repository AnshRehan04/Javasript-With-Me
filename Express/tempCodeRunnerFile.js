// Zod validation to check wheather an Input is an array of strings
const express=require("express");
const app=express();
const zod=require("zod");

// function validateinput(arr){
//     const schema=zod.array(zod.string());

//     const response=schema.safeParse(arr);
//     if(response.success){
//         console.log("True") ;
//     }
//     else{
//         console.log("False");
//     }
// }

function validateinput(obj){
    const schema=zod.object({
        email : zod.string,
        password: zod.string
    })

    const response=schema.safeParse(obj);
    if(response.success){
        console.log("True") ;
    }
    else{
        console.log("False");
    }
}

validateinput({
    email:"anshrehan7@gmail.com",
    password:"anshrehan041"
});