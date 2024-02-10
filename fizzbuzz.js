var output=[];
var count=1;
function counting(){
    output.push(count);
    if(count%3===0){
        output.push("Fizz");
    }
    else if(count%5===0){
        output.push("Buzz");
    }
    else{
        output.push(count);
    }
    count ++;
    console.log(output);
}
// function fizzbuzz(n){
//     if(n%5===0){
//         alert("Buzz");
//     }
//     else if (n%3===0){
//         alert("Fizz");
//     }
// }
// counting(12)
// fizzbuzz(10);