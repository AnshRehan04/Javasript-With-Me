// var x=7;
// function getname(){
//     console.log("Namaste ");
// }
// // Simple method
// getname();
// console.log(x);


// Hositing
// Hoisting means calll function before declaration It doesnot cause any error
getname();//function will be called
console.log(x); //Undefined
var x=7;
console.log(getname);
function getname(){

    console.log("Namaste ");
}

// console.log(getname);