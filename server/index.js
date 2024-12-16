const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql2');
var cors = require('cors')
const db = require('./models/index');
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:5173', 
  credentials: true, 
};

app.use(cors(corsOptions));

const apiRoute = require("./routes/apiIndex");

app.use("/v1/api", apiRoute)
// react

app.listen(3002, () => {
    console.log("Server Started on http://localhost:3002");
  });
