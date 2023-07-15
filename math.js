let a=Math.random();    
console.log(a);   //Generate Random Number between 0 to 1.

let b=Math.PI;
console.log(b);   //value of pi will be generated.

Math.round(1.2);  //1 will be printed.
let c=Math.max(1,2,3,5);
console.log(c);      //5

let lastname=' ansh ';
let firstName= new String ('rehan');

lastname.length();  //4
lastname[0];  //a

lastname.includes('an');  //true
lastname.startsWith('a');   //true
lastname.endsWith('h');   //true

lastname.indexOf('a');  //0
lastname.toUpperCase();  //ANSH
lastname.toLowerCase();  //ansh

lastname.trim();  //deleted spaces from name.
lastname.replace('an','ka');  //kash

let message="This is my message ";
let words=message.split(' ');
console.log(words );

let date=new Date();
console.log(date);