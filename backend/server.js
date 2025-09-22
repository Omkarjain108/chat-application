import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

//connect to db
connectDB();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});