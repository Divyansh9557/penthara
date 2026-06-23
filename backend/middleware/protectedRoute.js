import User from "../models/user.schema.js"
import jwt from "jsonwebtoken"

export const protectedRoute=  async (req,res,next)=>{
   try {
       
    const token = req.cookies.jwt
    
    if(!token){
        return res.status(400).json({error:"no token found"})
    }

    const decoded=  jwt.verify(token,process.env.JWT_SECRET)
    if(!decoded){
        return res.status(400).json({error:"invaild token"})
    }
    const user = await User.findById(decoded.userId).select("-password")

    if(!user){
        return res.status(400).json({error:"user not found"})
    }

    if(user.isAdmin===false){
         return res.status(400).json({error:"You are not authenticated"})
    }
    req.user=user
    next()
   } catch (error) {
    console.log("error in protect route middleware")
    res.status(400).json({error:"internal server error"})
   }
} 