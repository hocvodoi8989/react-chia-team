var express = require('express');  // import express from "express";
var app = express();
var port = 5000;
var cors = require('cors');
const soccerRoutes = require("./routes/index")

app.use(express.json());
app.use(cors());

app.use('/api/soccer', soccerRoutes);




app.listen(port, () => console.log('server đã chạy'));
