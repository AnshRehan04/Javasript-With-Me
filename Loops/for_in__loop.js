// This Loop is used to iterate over the properties of an object.
let obj={
    name:"Ansh",
    class:'12th',
    age:'19'
};

for(let key in obj){
    console.log(key+":"+obj[key]);
}