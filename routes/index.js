var search = require('../controllers/search.js');
var getJSON = require('../controllers/get-json.js');
var latest = require('../controllers/latest.js');
var express = require('express');

module.exports = function(app){

    app.use(express.static(__dirname + '/../public')) 

    app.get('/', function(req, res){
        return res.sendFile('index.html');
    })
    
    app.get('/api/imagesearch/:search?', function(req, res){
        search(req.params.search, req.query.offset, function(body){
            getJSON(body, res, false)
        })
    })

    app.get('/api/latest/imagesearch/', function(req, res){
        latest(function(body){
            getJSON(body, res, true)
        })
    })
}