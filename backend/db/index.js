import mongoose from "mongoose"

 export  const connectDB = async()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI)
        if(connect.connections[0].readyState){
            console.log("Database connect succesfully")
        }
    } catch (error) {
        console.log("failed to connect to db ",error);
        
    }
}
