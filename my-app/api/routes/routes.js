'use strict';
module.exports = function(app) {
  var homes = require('../controllers/homesController');

  app.route('/api/search').get(homes.search_homes)
};
