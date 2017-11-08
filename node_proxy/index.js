	
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const axios = require('axios')
const _ = require('lodash')


const ordinances = [
	{ referenceNumber: 1, name: 'Ordinance 1', description: 'stuff' },
	{ referenceNumber: 2, name: 'Ordinance 2', description: 'more stuff' }
];

app.get('/ordinances', function(req, res) {
  axios.get('http://webapi.legistar.com/v1/Seattle/Matters')
	.then(response => {
		res.send(response.data.map((item) => ({ id: item.MatterId, name: item.MatterName })))
	})
	.catch(function (error) {
		console.log(error);
	});
});

app.listen(4444, function() {
	console.log('your app is listening on port 4444')
})


// const results = [response]

// const mapped = results.map((item) => _.pick(item, ['MatterId', 'MatterName']))

// res.send(mapped)



// JSON.stringify(response.data, null, 2)