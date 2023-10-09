const express = require ('express');
const app = express();
const port = 8080;

const {Customer} = require("./models/index");

app.get('/',(req, res)=> {
    res.send("<h1>Express server sending data to frontend</h1>")

})

app.listen(port,async ()=>{
    console.log(`Express server is listening to port ${port}`);

    let Customer1 = await  Customer.create({custName:"Anish Kumar", custAddr:"Delhi"});
    // console.log(Customer1);

    let data = await Customer.findAll();
    // console.log(data);
})