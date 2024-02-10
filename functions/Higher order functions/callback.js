function greet(name,displaymsg){
    let greeting="hello "+name;
    displaymsg(greeting);
}

function displaymsg(message){
    console.log(message);
}
greet("ansh",displaymsg);