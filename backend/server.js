import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import handler from "../api/add-contact";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Handler for local development
app.post("/api/add-contact", (req, res) => handler(req, res));

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Backend running on http://localhost:${port}`)
);
