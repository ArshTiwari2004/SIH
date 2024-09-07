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
}));

export default app;
