// // var name="ansh";
// var name1=prompt("Enter your name ");
// // alert(name1.toUpperCase());
// alert(name1.toLowerCase());

var name=prompt("Enter your name ");  //ansh
var firstletter =name.slice(0,1); //'a'  
var firstcapital=firstletter.toUpperCase(); //'A'

var restname=name.slice(1,name.length);  //nsh
var capiatliseword=firstcapital+restname;
alert("Your name is "+capiatliseword);