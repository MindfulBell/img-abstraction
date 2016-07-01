var search = require('../search.js');
var getJSON = require('../callback.js');

module.exports = function(app){
    
    app.get('/', function(req, res){
        res.send("Hello There!");
    })
    
    app.get('/api/imagesearch/:search?', function(req, res){

        search(req.params.search, req.query.offset, function(body){
            getJSON(body, res)
        })


    })
    app.get('/api/imagesearch/latest/', function(req, res){
        //database usage!!!! 
    })
}