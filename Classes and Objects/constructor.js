/*Constructor() method is:
    automatically invoked by new(keyword)
    initializes object
 */

    class car {
        constructor(brand,mileage){
            console.log("creating new objects")
            this.brandname=brand;
            this.mile=mileage;
        }
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

    
    let fortuner=new car("cars",10);//constructor
    console.log(fortuner);
    // let nexus=new car("nexus",20);//constructor


