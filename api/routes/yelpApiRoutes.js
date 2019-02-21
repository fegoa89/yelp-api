'use strict';
module.exports = function(app) {
  var yelpApi = require('../controllers/yelpApiController');

  // Yelp Api Routes
  app.route('/location_suggest')
    .get(yelpApi.get_location_suggestions);

};
