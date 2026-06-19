import express from "express"

const app = new express()

   app.get('/',(req,res)=>{
       res.send("hello")
   })
  

 app.listen(5000,()=>{
    console.log("app is running on app")
 })