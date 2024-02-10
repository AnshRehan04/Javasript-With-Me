const url="https://cat-fact.herokuapp.com/facts";
let factpara=document.querySelector("p");
let btn1=document.querySelector("button");

const getfacts=async()=>{
console.log("Getting data....")
let response= await fetch(url);  //JSON format Not readable
console.log(response);
let data=await response.json();    //Readable Format
// console.log(data[0].text);
factpara.innerText=data[3].text;
}
btn1.addEventListener("click",getfacts);