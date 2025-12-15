const express = require('express');
const userRouter = require('./routes/user.routes')
const app = express();
app.set('view engine','ejs')

// to show entered form details on console we have to use two middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use('/user',userRouter)


app.listen(3000,()=>{
    console.log("Server Started!!!")
})