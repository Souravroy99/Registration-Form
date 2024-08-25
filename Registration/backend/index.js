require('dotenv').config() ;
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const FormRouter = require("../backend/router/index.js");
const connectDB = require('./utils/database.js');
const cors = require("cors");

const app = express();

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};
app.use(cors(corsOptions)) ;

app.use(express.json()) ; 

const port = process.env.PORT ;

app.use('/registration', FormRouter) ; 

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is successfully running at ${port}`);
    })
})