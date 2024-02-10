// function hello(){
//     var name="ansh";
//     console.log(name);
// }
// hello();
// console.log(name);

// function outerfn(){
//     let name="Ansh Rehan";
//     function innerfn(){
//         console.log(name);
//     }
//     return innerfn;
// }
// let fn=outerfn();
// fn();

function customer(){
    let count=0;
    return function(){
        count++;
        console.log("The count is ",count);
    }
}
let counter=customer();
counter();
counter();
counter();