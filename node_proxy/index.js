	
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var axios = require('axios')

const ordinances = [
	{ referenceNumber: 1, name: 'Ordinance 1', description: 'stuff' },
	{ referenceNumber: 2, name: 'Ordinance 2', description: 'more stuff' }
];

axios.get('http://webapi.legistar.com/v1/Seattle/Matters')
	.then(function(response) {
		console.log(response);
	})

	.catch(function (error) {
		console.log(error);
	})

// app.get('/', (req, res) => {
//   res.send(ordinances)
// })

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});