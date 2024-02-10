function button(){
let btn=document.querySelector("button")
btn.style.backgroundColor="red";
let h1=document.getElementById("h1").innerHTML="You click button"
h1.style.backgroundColor="red";
}

function button2(){
    let btn1=document.querySelector(".div1");
    btn1.style.backgroundColor="red";
    let new1=document.getElementsByClassName("h1").innerHTML="this is not a Div"
}

let div1=document.querySelector("div");

div1.onmouseover=()=>{
    // let div1=document.querySelector("div");
    // console.log("It was hover")
    div1.style.backgroundColor="red";
    div1.style.backgroundColor="pink";
}