const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

// serves index.html, css, js, img, favicon.ico from project root
app.use(express.static(path.join(__dirname, "../")));

app.use("/api/auth", authRoutes);
