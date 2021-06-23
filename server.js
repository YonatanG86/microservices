const express = require("express");
const app = express();
const port = 5000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");

app.get("/", (req, res) => res.json("Welcome to the server"));

app.listen(port, () => {
    console.log(`Server up and running http://localhost:${port}`);
});