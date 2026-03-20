import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./src/routes/auth.routes.js";

const app = express();
 
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", authRoutes); 

app.get("/api/test", (req, res) => {
  res.send("API Working");
});


export default app;
