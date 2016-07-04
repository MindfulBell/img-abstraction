module.exports = function(body, res, latest){
	var results;
	//If we are finding the latest searches from database
	if (latest) {
		results = body;		
	}
	//If we are just doing a search
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