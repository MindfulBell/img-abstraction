var request = require('request');

module.exports = function(query, os, callback){
    var offset = os === undefined ? 0 : os;
    var requestStr = "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q="  + query + 
    "&offset="  + offset +
    "&count=10";
        
    const options = {
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
    })
}


    