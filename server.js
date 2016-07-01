var express = require('express');
var app = express();
var routes = require('./routes/index.js')
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;
require('dotenv').config();

app.use(bodyParser.json());

routes(app);

app.listen(PORT, function(req, res){
    console.log("Listening on..." + PORT);
})