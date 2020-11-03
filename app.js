require('dotenv').config();

const API = require('call-of-duty-api')();

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const port = 3000;

const dataCrunch = require(__dirname + "/dataCrunch.js")

app.set('view engine', 'ejs');
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/dist', express.static(__dirname + '/dist'));

let data = '';

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
	// res.send(data)
});

app.post('/', (req, res) => {
	let username = req.body.username;
	var desiredPlatform = req.body.platform;
	console.log(req.body);

	API.login(process.env.MYAPIUN, process.env.MYAPIPW)
		.then(function (response) {
			// console.log(response);
			API.MWstats(username, API.platforms[desiredPlatform])
				.then((output) => {
					// console.log(output);
					data = output;
					rawImport = output;
					console.log(rawImport);
					// res.send(`<div>Data: ${data.username} > ${data.level}</div><div>${JSON.stringify(data)}</div>`)
					res.render('player', {
						foo: data,
					});
				})
				.catch((err) => {
					console.log(err);
					res.render('playernotfound', {
						un: username,
					});
				});
		})
		.catch(function (error) {
			console.log(error);
		});
});

app.listen(port, () => {
	console.log('Listening on port ' + port);
	// console.log(process.env.MYAPIUN)
});