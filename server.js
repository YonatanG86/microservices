const express = require("express");
const app = express();
const port = 5000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

//connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    // { useUnifiedTopology: true },
    () => {
        console.log("connected to DB");
    }
);


app.get("/", (req, res) => res.json("Welcome to the server"));

app.listen(port, () => {
    console.log(`Server up and running http://localhost:${port}`);
});