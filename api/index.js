import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app = express();
dotenv.config()


mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB")
    }).catch(err => {
        console.log(err)
    })


const PORT = 3000;
app.listen(PORT, (req, res) => {
    console.log(`Server is running on PORT ${PORT}...`)
})