// ForEach is a higher order function we will use this on an array to get all the elements of the array.

array=["Virat","Sachin","Rohit","Dhoni"]
array.forEach(element => {
    console.log(element);
});


// Map is also a higher order function which created a new array and perform according to the condition applied

arr=[1,2,3,4,5,6];
cube_arr=arr.map((e)=>e*e*e);
console.log(cube_arr)
console.log(arr)

// Filter method is also a higher order function which is used to filter out the array basis on a condition

arr1=[1,2,3,4,5,6,7,8,9,10]
let arr2=arr1.filter((e)=>e%2==0)
console.log(arr2);
console.log(arr1);

// Reduce
let arr3=[1,2,3,4,5,6,7,8,9,10];
const sum=arr3.reduce((curr,next)=>curr+next)
console.log(sum);