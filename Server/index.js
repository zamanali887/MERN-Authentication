require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose");

let URL = process.env.DB_URL

mongoose.connect(URL)


app.use(cors())
app.use(express.json())



const todoRoutes = require('./src/routes/todoRoutes');
const authRoutes = require('./src/routes/authRoutes');
app.use("/" , todoRoutes)
app.use("/auth" , authRoutes)


const PORT = 8000
app.listen(PORT, () => {
    console.log('Server is runnig perfectly on port', PORT)
})
