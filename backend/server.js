const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const productsRoutes = require("./routes/productsRoutes");

connectDB();

const app = express();

app.use(express.json());

app.use("/api/products", productsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`serwer running on port ${PORT}`));
