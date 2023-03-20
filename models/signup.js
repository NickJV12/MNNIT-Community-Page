const mongoose= require('mongoose');

const signupSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
   
},{ timestamps: true });
const Signup= mongoose.model('Signup', signupSchema);
module.exports = Signup;