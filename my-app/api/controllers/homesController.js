const csv = require('csv-parser');
const fs = require('fs');
const Home = require('../models/home');
const homes = []; 

fs.createReadStream('././api/csv/homes.csv')
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
    newHome.propertyType = data["PROPERTY TYPE"];
    homes.push(newHome);
  })
  .on('end', () => console.log("Done Parsing"));

exports.search_homes = function(req, res) {
    res.send(homes.filter(home => home.address.toString().toLowerCase().includes(req.query.address.toString().toLowerCase())));
};
