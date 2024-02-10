/*
    Inheritence is passing down properties & methods from parent to child class.
*/
/*
class parent{
    hello(){
        console.log("Hello");
    }
}

class child extends parent{
    
}

let obj =new child();//object is created for class child using

*/

class person{
    constructor(){
        console.log("Enter Parent constructor");
        this.speices="this species ";
    }
    eat(){
        console.log("Eat");
    }

    sleep(){
        console.log("sleep");
    }
    // work(){
    //     console.log("Do nothing ");
    // }
}

class Engineer extends person{
    constructor(branch){
        console.log("Enter child constructor");
        super(); //To invoke parent class constructor
        
        this.branchname=branch;
        console.log("Exit child constructor");
    }
    work(){
        console.log("Work");
    }
}

// let ansh=new Engineer();
let ansh=new Engineer("CSE");

/*
    If parent and child class both have same function then the child function will be invoked.[method overriding]
*/

/*
    The super keyword is used to call the constructor of its parent class to access the parents properties and methods

    super(args) class Parent Constructor

    super.parentmethod(args).
 */