import express from 'express'
import cors from 'cors'
import { database } from './config/db.js'
import dotenv from 'dotenv'
dotenv.config()

import PostRoutes from './routes/posts.js'
const app = express()

app.use(cors())
app.use(express.json())

app.use('/posts', PostRoutes)

database()

app.get('/', (req, res)=> {
    res.send('Hello World!')
})

const PORT = process.env.PORT || 1985

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})



