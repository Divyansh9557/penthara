import User from "../models/user.schema.js"
import bcrypt from "bcrypt"
import { generateTokenAndCookie } from "../utils/generateJwtToken.js"

export const loginUser = async(req,res)=>{
  try {
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(!user) throw new Error("User not found")
    if(!password)     throw new Error("Password not received")

     const isCorrect = await bcrypt.compare(password,user.password)   

     if(!isCorrect) throw new Error("Password is incorrect")
      if(user.isAdmin===false) throw new Error("User is unauthorized")
      generateTokenAndCookie(user._id,res)  
      res.status(200).json({success:true})

  } catch (error) {
     res.status(401).json({error:error.message})
  }
}

export const logout = async(req,res)=>{
     res.cookie("jwt","",{maxAge:0})
    res.status(200).json("user logout succesfully")
}

export const registerUser = async(req,res)=>{
  try {
     const {email,password,fullname} = req.body

     if(!email || !password || !fullname) throw new Error("Credential required")

     const isAvailable = await User.findOne({email})
     if(isAvailable) throw new Error("User already exist")

      const salt = await bcrypt.genSalt(10)
      const hassedPassword = await bcrypt.hash(password,salt)

      const user = await User.create({email,password:hassedPassword,fullname});
       
      res.status(200).json({success:true})
  
  } catch (error) {
    res.status(401).json({error:error.message})
  }
}

export const getUser = async(req,res)=>{
   try {
       const user = await User.findById(req.user._id).select("-password")
       res.status(200).json(user)
   } catch (error) {
     res.status(401).json({error:error.message})
   }
}