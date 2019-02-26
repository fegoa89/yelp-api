'use strict';
const request = require('request');

exports.yelpUrl = 'https://www.yelp.com';

exports.get_location_suggestions = function(req, res) {
    var locationSuggestionPath = `/location_suggest/v2?prefix=${req.query.prefix}`;
    var completeUrl = exports.yelpUrl + locationSuggestionPath;

    performRequest(completeUrl).then(function(data) {
        res.json(data);
    });
};

exports.get_search_suggestions = function(req, res) {
    if (!req.query.hasOwnProperty('prefix') || req.query.prefix.length == 0) {
        return res.status(400).send({
            error: 'The request is missing the *prefix*. It must be passed as a query parameter.'
        });
    }

    var searchSuggestionsPath = `/search_suggest/v2/prefetch?loc=${req.query.loc}&prefix=${req.query.prefix}`;
    var completeUrl = exports.yelpUrl + searchSuggestionsPath;

    performRequest(completeUrl).then(function(data) {
        res.json(data);
    });
};

exports.get_snippet_search = function(req, res) {
    var snippetSearchPath = `/search/snippet?find_desc=${req.query.find_desc}&find_loc=${req.query.find_loc}`
    var completeUrl = exports.yelpUrl + snippetSearchPath;

    performRequest(completeUrl).then(function(data) {
        res.json(data);
    });
};


function performRequest(url) {
    return new Promise((resolve, reject) => {
        request(url, {
            json: true
        }, (err, response) => {
            if (err) {
                return reject(err);
            } else {
                resolve(response.body);
            }
        });
    });
};
