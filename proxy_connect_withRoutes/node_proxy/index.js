	
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const _ = require('lodash');

app.use(cors());

function formatLastModified(value) {
	const utcDate = value.split('.')[0];
	return new Date(`${utcDate}Z`);
}

app.get('/ordinances', function(req, res) {
  axios.get('http://webapi.legistar.com/v1/Seattle/Matters')
		.then(response => {
			res.send(response.data.map((item) => ({
				id: item.MatterId,
				file: item.MatterFile,
				description: item.MatterTitle,
				status: item.MatterStatusName,
				type: item.MatterTypeName,
				dateIntroduced: new Date(item.MatterIntroDate),
				dateLastModified: formatLastModified(item.MatterLastModifiedUtc)
			})));
		})
		.catch(function (error) {
			console.log(error);
		});
});

app.get('/individualordinance', function(req, res) {
  axios.get('http://webapi.legistar.com/v1/Seattle/Matters/{MatterId}')
		.then(response => {
			res.send(response.data.map((item) => ({
				id: item.MatterId,
				file: item.MatterFile,
				description: item.MatterTitle,
				status: item.MatterStatusName,
				type: item.MatterTypeName,
				dateIntroduced: new Date(item.MatterIntroDate),
				dateLastModified: formatLastModified(item.MatterLastModifiedUtc)
			})));
		})
		.catch(function (error) {
			console.log(error);
		});
});

app.listen(4444, function() {
	console.log('your app is listening on port 4444')
});