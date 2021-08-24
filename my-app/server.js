// Angular server

const expressAngular = require('express');
const http = require('http');
const path = require('path');

const appAngular = expressAngular();
const port = 4200;
appAngular.use(expressAngular.static(__dirname + '/dist/my-app'));
appAngular.get('/*', (req, res) => res.sendFile(path.join(__dirname)));
const serverAngular = http.createServer(appAngular);
serverAngular.listen(port, () => console.log(`App running on: http://localhost:${port}`));


//Node server
const express = require("express")
var cors = require('cors')
var app = express();
const nodePort = 3000;
var server = app.listen(nodePort, () => console.log(`App running on: http://localhost:${nodePort}`));
app.use(cors());

app.get("/api/search", (req, res, next) => {
  var dummyJson = [
    {"address": "Dummy Address 1", "city": "San Francisco", "state": "CA", "price":1000000},
    {"address": "Dummy Address 2", "city":"Des Moines", "state": "IA", "price":200000}
  ];
  res.json(dummyJson.filter(home => home.address.toString().toLowerCase().includes(req.query.address.toString().toLowerCase())));
});
