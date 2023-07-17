// If we have given an array and we want to remove the elements 
// End-->Pop()
// Start-->Shift()
// Middle-->Splice()  splice(index,count)

let number=[1,2,3,4,5,6,7];
// Remove Element From End.

number.pop();
console.log(number);  //[1, 2, 3, 4, 5, 6]

// Remove Element from Start.

number.shift();
console.log(number);  //[2, 3, 4, 5, 6]

// Remove Element From Middle.

number.splice(3,1);
console.log(number);   //[2, 3, 4, 6]

// To Empty the Array.
let n=[1,2,3,4];
// n.length=0;   //If We want to Empty an array we do this.
// n.splice(0,n.length);
console.log(n);

// If we want to combine two arrays we can do this by using concat() function.
let n1=[1,2,3];
let n2=[4,5,6];
let n3=n1.concat(n2);  //[1,2,3,4,5,6]
console.log(n3);

let marks=[10,20,30,40,50,60,70];
let slice=marks.slice(2,5); //('index 2','index 4')
console.log(slice);  //[30.40.50] 

// Another Method To combine 2 arrays
let a=[3,2,1];
let b=[4,5,6];
// Using spread operator
let c=[...a,...b];
let d=[...a,'a',...b,'b'];
console.log(c);  //[3, 2, 1, 4, 5, 6]
console.log(d);  //[3, 2, 1, 'a', 4, 5, 6, 'b']

// Create copy of an Array.
let another=[...d];
console.log(another);  //[3, 2, 1, 'a', 4, 5, 6, 'b']

// TO iterate through an Array.
// Using For of Loop.
let array=[1,2,3,4,5];  
for(let n of array){
    console.log(n);  //1 2 3 4 5
}

// Using For each Loop.
array.forEach(function(number){ 
    console.log(number);   //1 2 3 4 5 
})

// Same Using arrow function
let arr=[2,3,4];
arr.forEach(number=>console.log(number));  //2 3 4

// To Join An Array we used join()
let arr1=[10,20,40,50,30];
let join=arr1.join(',');
console.log(join);  //10,20,40,50,30

// If we Want To Split a message or an array We use split method.
let msg="This is a Message ";
let msg1=msg.split(' ');
console.log(msg1); //['This', 'is', 'a', 'Message', '']

let joined=msg1.join('_');
console.log(joined);  //This_is_a_Message_

// To Sort an Array We use sort() Method
let first=[3,4,5,3,1];
let sort=first.sort();
console.log(sort);  //[1, 3, 3, 4, 5]

// To Reverse an Array We used Reverse() Method.
let arr2=[4,35,1,2,10];
let rev=arr2.reverse();
console.log(rev);   //[10, 2, 1, 35, 4]