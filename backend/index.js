import express from "express"
import { connectDB } from "./db/index.js"
import dotenv from "dotenv"
import employeeRoute from "./routes/employee.route.js"

dotenv.config()

const app = new express()
 app.use(express.urlencoded({extended:true}))
  app.use(express.json({limit:"5mb"}))
   
  app.get('/',(req,res)=>{
     res.send("hello")
  })
  app.use("/employee",employeeRoute)
  

   connectDB().then(()=>{
         app.listen(5000,()=>{
    console.log("app is running on app")
 })
   })
   .catch((err)=>{
    console.log("failed to connect with database")
 })

 