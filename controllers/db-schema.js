 var mongoose = require('mongoose');

 var searchSchema = new mongoose.Schema({
 	"term": String,
  "when": String
});

 module.exports = mongoose.model('Search', searchSchema);