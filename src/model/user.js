import mongoose from "mongoose";
const userschemas=new mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    cofrimpassword:{
        type:String,
        require:true
    },
    role:{
        type:String,
        enum:["user,admin"],
        default:user
    },
    createdat:{
        type:Date,
        default:Data.now()
    }
});