import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoutes from "./routes/booksRoutes.js"; 

const app = express();

// Middleware for parsing 
app.use(express.json());

//Middleware for CORS Policy
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true
}));

app.get("/", (req, res) => {
    console.log(req);
    return res.status(234).send("Welcome");
});

// Route middleware
app.use('/books', booksRoutes);

// Database and server
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
