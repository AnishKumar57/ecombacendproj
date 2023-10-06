require('dotenv').config()

const express = require('express')
const app = express()



// Port no. from .env file
const port = process.env.PORT;

let login = (req, res, next)=>{
    console.log("Login First");
    if(req.url=='/'){
      res.send("login First in hello world");
      next();
    }
}

let authorise = (req, res, next)=>{
  console.log("are your authorised");
  next();
}

app.get('/',login,authorise,(req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})