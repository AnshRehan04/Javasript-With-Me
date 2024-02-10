// function age(){
// var age=document.getElementById('101').value;
// alert("Your age is "+age);
// }

function liferem(age){
    var age=document.getElementById('101').value;
    var yearremaining=100-age;
    var days=yearremaining*365;
    var months=yearremaining*12;
    var weeks=yearremaining*52;
    alert("You have left "+ yearremaining+" years" + months + " months" + weeks+ " weeks"+ days+" days");
}

// if(age==''){
//     alert("Enter something");
// }