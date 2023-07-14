let name=['ansh','vedant','anmol'];
console.log(name[0]);  //'ansh'
console.log(name[1]);  //'vedant'
console.log(name[2]);  //'anmol'
console.log(name[3]);  //undefined

console.log(5>3);
console.log(5==3);
console.log(3==3);
console.log(5<3);

let num='2';
let num1='2';
console.log(num===num1);
// Object is created
let person={
    first_name:'ansh',
    age:19
}
console.log(person.first_name);  //-->ansh 
// let rectangle={
//     length:12,
//     breadth:13 ,   //Rectangle is object length and breadth are its property.

//     //function
//     draw:function(){
//         console.log('draw');
//     }
// };

console.log(rectangle.breadth)  //-->13

// Factory Function
// Main function and in it object is created

function creatRectangle(){
    let rectangle={
        length:12,
        breadth:13 ,   //Rectangle is object length and breadth are its property.
    
        //function
        draw:function(){
            console.log('draw');
        }
    };

    return rectangle;
}
