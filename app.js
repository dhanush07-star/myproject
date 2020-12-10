//require("dotenv").config();
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');


var indexRouter = require('./routes/index/index');
var trainRouter = require('./routes/trains/trains');


var app = express();

app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'jade');



app.use(express.json());
app.use('/', indexRouter);
app.use('/train', trainRouter);


app.listen(9000,function(){
    console.log("Servier connected....")
})
module.exports = app;