// This loop is used to iterate over the values of an array;
let arr=[1,2,3,4,5];
for(let e of arr){
    console.log(e+5);  //6,7,8,9,10
}
let name="ansh";
let size=0;
for(let a of name){
    console.log(a);//a n s h
    size++;
}
console.log(size);//4