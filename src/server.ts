import express from "express";
import { createCourse } from "./routes";

const app = express();
                    // ? Nome
const PORT = process.env.PORT || 3000;

app.get("/", createCourse);

app.listen(PORT, () => console.log(`Server Running at PORT: ${PORT}`) );