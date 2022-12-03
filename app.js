const express = require("express");
const router = require("./routes/index.js");
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/dataCPU');

app.use('/', router)

app.listen(3000)
