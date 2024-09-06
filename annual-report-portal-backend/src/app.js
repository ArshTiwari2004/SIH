import express from 'express'
import './config/dotenv.js'
import cors from 'cors'
import connectDB from './config/db.js';
import router from './routes/userRoutes.js';

const app = express()

connectDB() // Database connection 

app.use(express.json());
app.use("/api/v1",router)

app.use(cors({
    origin: ["http://localhost:5173"],
    // methods:["GET","POST","PUT","DELETE"],
    // credentials:true,
}));

export default app;




// app.use(cors({
//     origin: 'http://localhost:5173', // Replace with your frontend URL
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add any other methods you use
//     credentials: true // If you need to send cookies with requests
//   }))