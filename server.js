var express = require('express');
var app = express();
var routes = require('./routes/index.js')
var PORT = process.env.PORT || 8080;
var mongoose = require('mongoose');

require('dotenv').config();

var dburl = process.env.MONGODB_MLAB || 'mongodb://localhost:27017/fcc-tb'

mongoose.connect(dburl);

routes(app);

app.listen(PORT, function(req, res){
	  console.log("Listening on..." + PORT);
})



