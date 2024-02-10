// let array=[1,2,3,4,5];
// //array.indexof("element","index from where to start finding")
// console.log(array.indexOf(2,0));  //1
// console.log(array.indexOf('a',0));  //-1 

// Map()
// let array=[1,2,3,4];
// array.map((value,index)=>{ 
//     console.log(value,index);    //value is the parameter it will return all the elements of the array.
//     //First element then its index will be return;

// })
// let array=[1,2,3,4];
// array.map((value)=>{ 
//     console.log(value);    //value is the parameter it will return all the elements of the array.
    
// })

// let array=[1,2,3,4];
// array.map((value,index,array)=>{ 
//     console.log(value,index,array);    //value is the parameter it will return all the elements of the array.
//     //First element then its index will be return then array will be retur;

// })

// let a=[1,2,3,4];
// let b=a.map((value,index,a)=>{
//     return value+index;
// })

// console.log(b);  //[1,3,5,7]

// let a=[2,3,4,54,5];
// let b=a.filter((a)=>{
//     return a<10;  //filter all the elements of the array and check the condition if value<10;
// })
// console.log(b);  //[2,3,4,5]

//reduce();
// let a=[1,2,3,4];
// let b=a.reduce((h1,h2)=>{
//     return h1+h2;
// });
// console.log(b);

// let fun=(h1,h2)=>{
//     return h1+h2;
// }
// let a=[1,2,3,4,5];
// let b=a.reduce(fun);
// console.log(b);

// let a=[1,2,3,4,5,6];
// a.fill(0);
// console.log(a);//[0,0,0,0,0,0,0]

// let a=[1,2,3,4,5,6];
// a.fill("a"); 
// console.log(a);

let a=[1,2,3,4,5,6];
a.fill(2,1,4);
console.log(a); //[1,2,2,2,5,6]