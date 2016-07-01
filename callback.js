module.exports = function(body, res){
    var results = JSON.parse(body);
    var myVar = results.value.map(function(item){
        return {
            "alt-text": item.name, 
            "image-url": item.contentUrl, 
            "page-url": item.hostPageUrl
        }
    })
    res.json(myVar)
}