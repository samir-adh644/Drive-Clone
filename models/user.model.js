const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim:true,
        lowercase: true,
        unique:true,
        // minlength:[13, 'Username must be at least 13 characters']
    },
    email: {
        type: String,
        required: true,
        trim:true,
        lowercase: true,
        unique:true,
        minlength:[13, 'email must be at least 13 characters']
    },

    password: {
        type:String,
        required: true,
        trim:true,
        lowercase: true,
        unique:true,
        minlength:[5, 'Password must be at least 13 characters']
    }

})

const user = mongoose.model('user',userSchema);

module.exports = user;