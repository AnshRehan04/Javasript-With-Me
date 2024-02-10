let marks=[97,25,70,100,59];
// console.log(marks[4]); //59
// console.log(marks.length);//5
// console.log(typeof(marks));//Objects

// // Using Object.
// let obj={
//     stu1:97,
//     stu2:25,
//     stu3:70,
//     stu4:100,
//     stu5:59,
// };
// console.log(`Marks of student 1 is ${obj.stu1}`);

// for(let i=0;i<marks.length;i++){
//     console.log(`marks is ${marks[i]}`);
// }

// for(let item of marks){
//     console.log(item);  //Using For of loop
// }

// Question:Given array of marks calculate the average of marks.

let marks1=[12,34,56,78,90];
let sum=0;
for(let i=0;i<marks1.length;i++){
    sum+=marks1[i];
}
console.log(`Average of marks is ${sum/marks1.length}`);