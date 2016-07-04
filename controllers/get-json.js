module.exports = function(body, res, latest){
	var results;
	//If we are doing a search (not finding latest docs)
	if (latest) {
		results = body;		
	}
	//If we are just returning the latest
	else {
		var data = JSON.parse(body);
    results = data.value.map(function(item){
        return {
            "alt-text": item.name, 
            "image-url": item.contentUrl, 
            "page-url": item.hostPageUrl
        }
    })
	}
	res.json(results)
}