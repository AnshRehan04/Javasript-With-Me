/*
        setTimout functions.
function hello(){
    console.log("Hello");
}
setTimeout(hello,2000);  //function will run at a timeinterval of 2s 

setTimeout(() => {
    console.log("Hello World")
}, 3000);

*/

// Synchornous : means the code will run sequence wise first statement will execute then second then so on...

// But Asynchornous is completely different It will not run in sequence 
/*

console.log("one");
console.log("two");
setTimeout(() => {
    console.log("Hello");
}, 3000);

console.log("Three");
console.log("Fourth");

*/

/*
Callback function

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumcallBack){
    sumcallBack(a,b);
}

calculator(1,20,sum);

function hello(){
    console.log("hello");
}
setTimeout(hello,3000);
*/

// let h=document.querySelector("h1");
// function header(){
//     h.innerHTML="HELLO";
// }
// setTimeout(header,2000);

function getdata(id,getnextdata){
    // console.log("data",id);
    //2s delay
    setTimeout(() => {
        console.log("data",id);
        if(getnextdata){
            getnextdata();
        }
        
    }, 2000);
}

//Callback hell :Nested callbacks
/* CallBack Hell:Nested callbacks stacked below one another forming a pyramid structure.
(Pyramid od Doom)
This style of programming becomes difficult to understand and manage
*/
getdata(230,()=>{
    getdata(2,()=>{
        getdata(3,()=>{
            getdata(4);
        })
    })
});
// getdata(23);