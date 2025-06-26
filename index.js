import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config({});
import postRoutes from './routes/postRoutes.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());


app.use('/admin', postRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});