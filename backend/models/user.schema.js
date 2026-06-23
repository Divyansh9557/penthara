import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        
    },
    department:{
         type:String,
     
    },
    email:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
        
    },
    password:{
        type:String,
    },
    employee:{
        type:Boolean,
        default:false,
    }

},{timestamps:true})

const User = mongoose.model("User",userSchema)

export default User
