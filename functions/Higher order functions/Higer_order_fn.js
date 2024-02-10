// function greet(add,a,b){
//     return add(a,b);
// }
// function add(a,b){
//     return a+b;
// }
// let result=add(2,3);
// console.log(result)

function greet(){
    return function(){
        console.log("Hello World");
    }
}
let greetfn=greet();
greetfn()