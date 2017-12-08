var mongoose = require('mongoose');

var VoteSchema = mongoose.Schema({
	vote: { type: Boolean }, // type???
})

var VoteRecord = mongoose.model('vote', VoteSchema);
module.exports = VoteRecord;