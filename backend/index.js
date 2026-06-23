import express from "express"
import { connectDB } from "./db/index.js"
import dotenv from "dotenv"
import employeeRoute from "./routes/employee.route.js"
import authRoute from "./routes/auth.route.js"
import cors from "cors"
import cookieParser from "cookie-parser"

dotenv.config()

const app =  express()
 app.use(express.urlencoded({extended:true}))
 app.use(express.json({limit:"5mb"}))
 app.use(cookieParser())
 app.use(cors({
   origin:process.env.CORS_ORIGIN,
   credentials:true
 }))
   
  app.get('/',(req,res)=>{
     res.send("hello")
  })
  app.use("/employee",employeeRoute)
  app.use("/auth",authRoute)
  

   connectDB().then(()=>{
         app.listen(5000,()=>{
    console.log("app is running on app")
 })
   })
   .catch((err)=>{
    console.log("failed to connect with database")
 })

 