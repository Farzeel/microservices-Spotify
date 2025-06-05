import express from 'express';
import dotenv from "dotenv"
import connectDB from './db/connect';

import userRoutes from "./route"

dotenv.config()

const app = express();
const port =process.env.PORT || 3000;

// Middleware
app.use(express.json());

// ROUTES
app.use('/api/v1/users', userRoutes);

app.get('/', (_req, res) => {
  res.send('Hello TypeScript + Express!');
});

app.listen(port, async() => {
    await connectDB(process.env.DATABASE_URI!)
  console.log(`Server is running at http://localhost:${port}`);
});
