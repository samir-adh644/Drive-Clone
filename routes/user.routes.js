const express = require('express')
const router = express.Router();
const { body,validationResult } = require('express-validator');
const userModel = require('../models/user.model')
const bcrypt = require('bcrypt');
// jsonwebtoken is an external commans

router.get('/register',(req,res)=>{
    res.render('register')
})

router.post('/register',
    body('email').trim().isEmail(),
    body('password').trim().isLength({min:5}),
    body('username').trim().isLength({min:3}),

    async (req,res)=>{
        const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors : errors.array(),
            message: 'Invalid data'
        })
    }

    const { email , username , password }= req.body;

    const hashpassword = await bcrypt.hash(password, 10)

    const newUser =await  userModel.create({
        email,
        username,
        password:hashpassword
    })

    res.json(newUser)
})

router.get('/login',(req,res)=>{
    res.render('login')
})

router.post('/login',
     body('password').trim().isLength({min:5}),
    body('username').trim().isLength({min:3}),
    async (req,res)=>{
        const errors = validationResult(req);

        if (!errors.isEmpty()){
            return res.status(400).json({
                error:errors.array(),
                message:'Invalid Data'
            })
        }

        const {username , password}=req.body;

        const user = await userModel.findOneAndUpdate({
            username:username
        })

        if(!user){
            return res.status(400).json({
                messsage:"Username or password is incorrect"
            })
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.status(400).json({
                message:'Username or password is incorrect'
            })
        }


    }
)

module.exports = router;