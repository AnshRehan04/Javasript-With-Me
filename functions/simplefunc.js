// function hello(){
//     alert("Hello");
//     alert("Hi");
//     alert("Hey");
//     // hello();
// }

// hello();  //Function call

// function cost(bottles){
//     var cost=bottles*1.333;
//     cost=Math.floor(cost) 
//     alert("Cost of bootle is "+cost);
// }
// cost(29);  //2

function liferem(age){
    var yearremaining=100-age;
    var days=yearremaining*365;
    var months=yearremaining*12;
    var weeks=yearremaining*52;
    alert("You have left "+ yearremaining+" years" + months + " months" + weeks+ " weeks"+ days+" days");
}

liferem(2);