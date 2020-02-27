const express = require('express');
const app = express();
const path = require('path');

const request = require('request');
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', function(req, res, next) {
	request({
		uri: 'https://reqres.in/api/users?page=2'
	}).pipe(res);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`app is listening on http://localhost:${PORT}`);
});
