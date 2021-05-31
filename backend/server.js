const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`serwer running on port ${PORT}`));
