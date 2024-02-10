// let greet=()=>alert("hello");
// greet();
// var name=prompt("enter a name ");
// let greet=()=>alert("hello "+name);
// greet(name);

// let name1=(a,b)=>{
//     console.log(a+b);
// }
// name1(2,3);

// let mult=(a,b)=>{
//     return a*b;
// }
// console.log(mult(3,4));

// vowels check
let name=prompt("Enter a string ");
let count=0;
let check=(name)=>{
    for(const i of name){
        if(i=='a' ||i=='e' || i=='i' || i=='o' || i=='u'){
            count++;
        }
    }
    return count;
}

console.log(check(name));