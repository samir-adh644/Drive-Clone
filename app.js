const express = require('express');
const cookieParser= require('cookie-parser')
const app = express();






// to show entered form details on console we have to use two middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true})) 
app.use(cookieParser());

// for homepage and file upaoading page
const indexRouter = require('./routes/index.routes')
const userRouter = require('./routes/user.routes')


// requiring dotenv
const dotenv = require('dotenv');
dotenv.config();

// to connect mongoose
const connectToDB=require('./config/db')
connectToDB();

app.set('view engine','ejs')

// to config env for mongoDB



// to config env for mongoDB


app.use('/',indexRouter)
app.use('/user',userRouter)


app.listen(3000,()=>{
    console.log("Server Started!!!")
})