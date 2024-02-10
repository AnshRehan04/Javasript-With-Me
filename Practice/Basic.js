/*
<--------------------------------Variables and Operators------------------->
let a=20;
let b=20;
console.log(a-b);

let name="ansh";
console.log(name+a);

*/

/*
<-----------------------------Simple function--------------------------->
function greet(){
    console.log("ansh");
}
greet();

function greet1(name1){
    console.log(name1)
}
greet1("anshrehan");
*/

/*
<--------------------------Arrow function-------------------------------->
let greet =()=>{
    console.log("Hello world");
}
greet();

let greet1=(name)=>{
    console.log("Hello ",name);
}
greet1("ansh");
*/

/*

<------------------------Arrays---------------------------->
let arr=[1,2,3,4,5,56,6];
let arr1=[10,20,93,4,5,56,6];
function data(arr){
    console.log("At 4th index :",arr[4]);
}
data(arr);
console.log("Size of array is ",arr.length);
console.log(arr.includes(49));  //It returns boolean
console.log(arr.push(45));  //Returns new length after appending the element
// console.log(arr);
// console.log(arr.concat(arr1));  //concat 2 arrays
console.log(arr.indexOf(4));  //Return the index of particular element.

*/


/*
<---------------------------------Strings-------------------------->
let name1="ansh";
let name2="Rehan"
console.log(name1.length)  //Return the length of the string
console.log(name1.charAt(2)); //Return the character at 2nd index
console.log(name1.concat(name2));  //Concat Two strings
console.log(name1.endsWith("h"));  //Return bool 
console.log(name1.includes("x")) //Return bool
console.log(name1.indexOf("a"));  //Return the index of the particular character
console.log(name1.lastIndexOf("ns"))  //Return the index of substring in a string
console.log(name1.toLocaleUpperCase());  //Convert into upper case
console.log(name1.slice(1,3))  //Slice the string from 1 to 2 index start from 1 end at 2

*/


let object={
    name:"ansh",
    age:19,
    Course:"CSE",
};

function getdata(){
    console.log(object.name);
    console.log(object.age);
    console.log(object.Course);
}
getdata();