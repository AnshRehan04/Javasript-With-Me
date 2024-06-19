// const student={
//     name:"ansh",
//     rollno:1299,
//     course:"BE",
//     marks:95,
//     printmarks:()=>{
//         console.log("Marks is ",student.marks);
//     },
// };

// console.log(`Student name is ${student.name} his rollno is ${student.rollno} and his course is ${student.course}`);
// student.printmarks();

// // Prototype:It is like an object which inherits some functions which we can use.
// // Note : Arrays in javascript is an object and it also have prototypes with some defined functions/methods
// // 
// // We can also define our prototype by using the keyword __proto__

const employee={
    caltax(){
        console.log("Tax is 10%");
    },
};

const karan={
    salary:50000,
    caltax(){
        console.log("Tax is 20%");
    },
};

karan.__proto__=employee;  //To inherits the e,ployee prototype to karan objevt
// If object and prototype has same method then object method will be printed