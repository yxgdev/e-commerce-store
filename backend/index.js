import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("backend is runnign");
    });
  })
  .catch((err) => {
    console.log(err);
  });

//   routes
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
