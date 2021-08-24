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

const csv = require('csv-parser')
const fs = require('fs')
const homes = []; 

fs.createReadStream('./csv/homes.csv')
  .pipe(csv())
  .on('data', (data) => {
    var newHome = new Home();
    newHome.address = data["ADDRESS"];
    newHome.city = data["CITY"];
    newHome.state = data["STATE OR PROVINCE"];
    newHome.price = data["PRICE"];
    newHome.zip = data["ZIP OR POSTAL CODE"];
    newHome.beds = data["BEDS"];
    newHome.baths = data["BATHS"];
    newHome.sqfeet = data["SQUARE FEET"];
    newHome.lotSize = data["LOT SIZE"];
    newHome.yearBuilt = data["YEAR BUILT"];
    homes.push(newHome);
  })
  .on('end', () => console.log("Done"));

app.get("/api/search", (req, res, next) => {
  res.send(homes.filter(home => home.address.toString().toLowerCase().includes(req.query.address.toString().toLowerCase())));
});

class Home {
  constructor() {
    this.address = '';
    this.city = '';
    this.state = '';
    this.price = 0;
    this.zip = 0;
    this.beds = 0;
    this.baths = 0;
    this.sqfeet = 0;
    this.lotSize = 0;
    this.yearBuilt = 0;
  }
}
