let tries=0;
let a=30;
let input;
// let name=prompt("enter a number between 1 to 100 ");
randomno();
function randomno(){
    // if(name==a){
    //     alert("You Guessed it right ");
    // }
    // else if(name>a){
    //     alert("You gueesed greater number ");

    // }

    while(input!=a){
        input=prompt("Enter a number ");
        alert("Wrong ");
        tries+=1;
    }
    if(a==input){
    alert("You Guess right and used "+tries+" tries" );
}
}