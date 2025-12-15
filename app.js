const express = require('express');
const app = express();

app.get('/',(eeq,res)=>{
    res.send("Hello from page")
})

app.listen(3000,()=>{
    console.log("Server Started!!!")
})