require('dotenv').config();
const dataCrunch = require(__dirname + "/dataCrunch.js")
const API = require('call-of-duty-api')();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
let data = {};


app.set('view engine', 'ejs');
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/dist', express.static(__dirname + '/dist'));


module.exports.apiData = data
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
	// res.send(data)
});

app.post('/', (req, res) => {
	let username = req.body.username;
	var desiredPlatform = req.body.platform;
	// console.log(req.body);

	API.login(process.env.MYAPIUN, process.env.MYAPIPW)
		.then(function (response) {
			// console.log(response);
			API.MWstats(username, API.platforms[desiredPlatform])
				.then((output) => {
					// console.log(output);
					dataCrunch.buildWeaponData(output.lifetime.itemData)
					dataCrunch.buildCostData()
					data = output;
					itemData = output.lifetime.itemData;
					firearmData = dataCrunch.standardCategories;
					// console.log(itemData)
					rawImport = output;
					// console.log(JSON.stringify(data))
					// console.log(dataCrunch.itemData.lifetime)
					// console.log(dataCrunch.dataCleaner())
					// dataCrunch.dataCleaner(output);
					// console.log("data to dataCrunch", rawImport);
					// res.send(`<div>Data: ${data.username} > ${data.level}</div><div>${JSON.stringify(data)}</div>`)
					// dataCrunch.buildWeaponData()

					res.render('player', {
						foo: data,
						myReqItemData: output.lifetime.itemData,
						returnedData: dataCrunch.returnedData,
						cleanPercent: dataCrunch.cleanPercent,
						cleanedDataWeapons: dataCrunch.weaponData,
						firearmData: dataCrunch.standardCategories
					});
				})
				.catch((err) => {
					console.log(err);
					res.render('playernotfound', {
						un: username,
					});
				});
			// API.MWBattleData(username, API.platforms[desiredPlatform])
			// 	.then((output2) => {

			// 		console.log(JSON.stringify(output2))

			// 	})
			// 	.catch((err) => {
			// 		console.log(err);
			// 		res.render('playernotfound', {
			// 			un: username,
			// 		});
			// 	});
		})
		.catch(function (error) {
			console.log(error);
		});
});

app.listen(port, () => {
	console.log('Listening on port ' + port);
	// console.log(process.env.MYAPIUN)
});

console.log("app.js Exports", module.exports)