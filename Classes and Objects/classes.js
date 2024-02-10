// Class is a program-code template for creating objects.
// Those objects will have some state (variables) & some behaviour (functions) inside it.

class car {
    start(){
        console.log("start");
    }

    stop(){
        console.log("Stop");
    }
    setbrand(brand){
        this.brandname=brand;  //we can define variables inside the class 
        //this keyword here means the object name for which is called for.
    }
};

// To make object of existing class we use the following syntax
// let myobject =new myclass();
let fortuner=new car();//fortuner become object of class car();
fortuner.setbrand("Fortuner");//object fortuner now inherits the variable brandname.
let nexus= new car(); //nexus become object for class car();
nexus.setbrand("nexus");
