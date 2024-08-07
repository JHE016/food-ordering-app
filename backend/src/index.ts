import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() =>
    (console.log("Connected to database!")))

//create a new express server
const app = express();
app.use(express.json())
app.use(cors())

app.get("/test", async (req: Request, res: Response) => {
    res.json({ message: "Hello!" });
})

app.listen(4000, () => {
    console.log("server started on localhost:4000");
})