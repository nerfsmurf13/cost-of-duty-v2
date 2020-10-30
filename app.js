require('dotenv').config();

const API = require('call-of-duty-api')();

const express = require('express')

const app = express()

const bodyParser = require('body-parser')

app.set('view engine', "ejs")
app.use(bodyParser.urlencoded({
    extended: true
}))

let data = ""

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
    // res.send(data)

})

app.post('/', (req, res) => {

    let username = req.body.username
    console.log(req.body.username)

    API.login(process.env.MYAPIUN, process.env.MYAPIPW)
        .then(function (response) {
            console.log(response)
            API.MWstats(username, API.platforms.battle).then((output) => {
                console.log(output);
                data = output
                // res.send(`<div>Data: ${data.username} > ${data.level}</div><div>${JSON.stringify(data)}</div>`)
                res.render('player', {
                    foo: data
                })
            }).catch((err) => {
                console.log(err);
            });
        })
        .catch(function (error) {
            console.log(error)
        });

})

app.listen(3000, () => {
    console.log('listening')
    // console.log(process.env.MYAPIUN)
})