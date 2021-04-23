import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/memories"

export const database = () => {
    mongoose.connect(DB_URL, {
        useUnifiedTopology:true,
        useNewUrlParser:true,
        useCreateIndex:true
    })
    .then(()=> {
        console.log('Database is running on ' + DB_URL)
    })
    .catch((error)=> {
        console.log(error)
    })
}