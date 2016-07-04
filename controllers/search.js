var request = require('request');
var Search = require('./db-schema.js');

module.exports = function(query, os, callback){
    var offset = os === undefined ? 0 : os;
    var requestStr = "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q="  + query + 
    "&offset="  + offset +
    "&count=10";
        
    var options = {
        url: requestStr,
        headers: {
            "Ocp-Apim-Subscription-Key": process.env.BING_API_KEY
        }
    }
    
    request(options, function(err, res, body){
        if (err){
            console.log(err)
        }
        callback(body)       

        //query database and see if the search string document exists already
        //if it does, increase # of searches by 1
        //if it does not, create a new document

        var userSearch = { term: query.toLowerCase() }
        var time = new Date();

        Search.findOneAndUpdate(userSearch, { $set: {when: time}}, { upsert: true }, function(err, doc){
            if (err) {
                console.error; 
            }
            else {
                console.log('Successfully added to/updated databse')
            }
        })
    })
}


    