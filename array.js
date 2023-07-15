let array=[1,2,3,4];
console.log(array);
array.indexOf(1);  //0
array[0];   //1
array[3];   //4
//At Ending.
array.push(9);  //9 will be added at the end.  1,2,3,4,9

//At starting.
array.unshift(3);  //3 will be added at the begining of the array. 8,1,2,3,4,9.

//At Middle
array.splice(2,0,'a','b');

//end-->Push
//Middle-->splice
//starting -->unshift

//searching 
array.indexOf(3);  //2 is theindex of no 3

// We want to check wheather a number is resent or not

if(array.indexOf(18)!=-1){
    console.log("present");
}
else{
    console.log("Not Present");
}

if(array.includes(3)){
    console.log("Yes ");
}
else{
    console.log("No");
}