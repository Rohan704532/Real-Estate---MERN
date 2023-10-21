import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to MongoDB")
})
.catch((err)=>{
    console.log(err)
})
const app = express()

app.listen(3000,()=>{
    console.log("Service is runnoing on 3000!!")
})

// /Wy9veMN8dip3PzvK