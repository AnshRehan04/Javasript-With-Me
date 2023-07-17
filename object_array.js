// Array of Object.
let courses=[
    {no:1,name:'ansh'},
    {no:2,name:'Rehan'}
];
console.log(courses);
courses.indexOf({no:1,name:'ansh'});
// If we want to find the object we cant use indexof and includes function we can only use find function using predicated function.


// let course=courses.find(function(courses){
//     return courses.name==='ansh';
// })
// console.log(course);

let coursed=courses.find(courses=>courses.name==='Rehan');
console.log(coursed)

let names=[
    {no:1,Subject:'hindi'},
    {no:2,Subject:'English'},
    {no:3,Subject:'SST'},
    {no:4,Subject:'Maths'},
];
console.log(names);

// let name=names.find(function(names){
//     return names.Subject==='Maths';
// })

let name=names.find(names=>names.Subject=='hindi');
console.log(name);

let sports=[
    {no:1,game:'Cricket'},
    {no:2,game:'Basketball'},
    {no:3,game:'Football'},
];

console.log(sports);  //To Print all elements of array of objects.

// To Find Particular Element We use Find Method.

let game=sports.find(function(sports){
    return sports.game==='Football';
});
console.log(game);  //{no: 3, game: 'Football'}

// Same We can Do USing Arrow Functions.
game=sports.find(sports=>sports.game==='Cricket');
console.log(game);  //{no: 1, game: 'Cricket'}