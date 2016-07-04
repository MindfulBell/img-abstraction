var Search = require('./db-schema.js');

module.exports = function(callback){

	Search.find({}, function(err, docs){

		console.log('Sorting top 10 searches from most recent to least...')

		var latestDocs = docs.sort(function(doc1, doc2){
			return new Date(doc2.when) - new Date(doc1.when);
		})
		.map(function(doc){
			return {term: doc.term, when: doc.when}			
		})
		.filter(function(_, ind){
			return ind < 10;
		})

		callback(latestDocs);
	})
}