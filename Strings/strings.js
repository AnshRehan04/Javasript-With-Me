let str="ansh";
console.log(str);
let a=str.length;
console.log(a); //4
console.log(str[0]);  //a
console.log(str[3]);  //3

let obj = {
    name:"pen",
    price:10
};
// console.log("name is ",obj.name,"price is ",obj.price); //name is pen price is 10
// Same thing can happen in literal strings using $ sign

let output=`name is ${obj.name} price is ${obj.price}`;
console.log(output);

console.log("ansh\nRehan")  //there are some escape character with meaning like \n is used for next line.
console.log("ansh\tRehan")  //there are some escape character with meaning like \t is used for tab space.
// Length is escape character is count as 1.