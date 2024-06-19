const express = require("express");
const app = express();

const user = [{
    name: "Ansh",
    kidneys: [{
        health: false,
    }]
}];

app.use(express.json());

// console.log(user[0])

app.get("/", (req, res) => {
    // Return how many kidneys are healthy
    const johnkidney = user[0].kidneys;
    // console.log(johnkidney)

    const number = johnkidney.length;
    // console.log(number)
    let healthy = 0;
    for (let i = 0; i < number; i++) {
        if (johnkidney[i].health) {
            healthy++;
        }
    }
    const unhealthy = number - healthy;

    res.json({
        number,
        healthy,
        unhealthy,
    });

});

app.post("/", (req, res) => {
    // new Change made and that change apply on mini database i.e user

    console.log(req.body) //undefined
    const ishealthy=req.body.ishealthy;
    user[0].kidneys.push({
        health:ishealthy
    })

    res.json({
        mess:"Done!"
    })
});

app.put("/", (req, res) => {
    // Make all unhealthy kidneys to healthy i.e false=>true
    for(let i=0;i<user[0].kidneys.length;i++){
        user[0].kidneys[i].health=true;
    }
    res.json({});
});

app.delete("/",(req,res)=>{
    // Delete the unhealthy kidney
    const newkidney=[];
    for(let i=0;i<user[0].kidneys.length;i++){
        if(user[0].kidneys[i].health){
            newkidney.push({
                health:true
            })
        }
    }

    user[0].kidneys=newkidney;
    res.json({mess:"Done"});
})

app.listen(3000, () => {
    console.log("running");
});
