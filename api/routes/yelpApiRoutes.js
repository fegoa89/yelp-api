'use strict';
module.exports = function(app) {
    var yelpApi = require('../controllers/yelpApiController');

    // Yelp Api Routes
    app.route('/location_suggest')
        .get(yelpApi.get_location_suggestions);

    app.route('/search_suggest')
        .get(yelpApi.get_search_suggestions);

    app.route('/snippet_search')
        .get(yelpApi.get_snippet_search);
};
