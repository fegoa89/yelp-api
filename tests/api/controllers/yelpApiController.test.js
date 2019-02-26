var yelpApiCtrl = require('../../../api/controllers/yelpApiController'),
    http_mocks = require('node-mocks-http'),
    expect = require('chai').expect,
    nock = require('nock');


function buildResponse() {
    return http_mocks.createResponse({
        eventEmitter: require('events').EventEmitter
    });
}


describe('#get_location_suggestions', function() {
    it('returns an object', function(done) {
        let locationSuggestResponse = require('../../mocks/location_suggest_response.json');

        nock(yelpApiCtrl.yelpUrl)
            .get('/location_suggest/v2')
            .query({
                prefix: 'brandenburger'
            })
            .reply(200, locationSuggestResponse);

        var request = http_mocks.createRequest({
            method: 'GET',
            url: '/location_suggest/v2?prefix=brandenburger',
        });

        var response = buildResponse();
        response.on('end', function() {
            expect(JSON.parse(response._getData())).to.be.a('object');
            done();
        });

        yelpApiCtrl.get_location_suggestions(request, response);
    });
});

describe('#get_search_suggestions', function() {
    describe('when "loc" and "prefix" params are provided', function() {
        it('returns an object', function(done) {
            let searchSuggestResponse = require('../../mocks/search_suggest_response.json');

            nock(yelpApiCtrl.yelpUrl)
                .get('/search_suggest/v2/prefetch')
                .query({
                    loc: 'Berlin',
                    prefix: 'Brandenburger'
                })
                .reply(200, searchSuggestResponse);

            var request = http_mocks.createRequest({
                method: 'GET',
                url: '/search_suggest?loc=Berlin&prefix=Brandenburger',
            });

            var response = buildResponse();
            response.on('end', function() {
                expect(JSON.parse(response._getData())).to.be.a('object');
                done();
            });

            yelpApiCtrl.get_search_suggestions(request, response);
        });
    });

    describe('when "prefix" param is not provided or empty', function() {
        it('returns an error', function(done) {
            var request = http_mocks.createRequest({
                method: 'GET',
                url: '/search_suggest?loc=Berlin&prefix=',
            });

            var response = buildResponse();
            response.on('end', function() {
                expect(response._getData()).to.be.a('object');
                expect(response._getData()).to.have.property('error');
                expect(response._getData().error).to.equal('The request is missing the *prefix*. It must be passed as a query parameter.');
                done();
            });

            yelpApiCtrl.get_search_suggestions(request, response);
        });
    });
});

describe('#get_snippet_search', function() {
    it('returns an object', function(done) {
        let locationSuggestResponse = require('../../mocks/search_snippet_response.json');

        nock(yelpApiCtrl.yelpUrl)
            .get('/search/snippet')
            .query({
                find_desc: 'Burger',
                find_loc: 'Duesseldorf'
            })
            .reply(200, locationSuggestResponse);

        var request = http_mocks.createRequest({
            method: 'GET',
            url: '/snippet_search?find_desc=Burger&find_loc=Duesseldorf',
        });

        var response = buildResponse();
        response.on('end', function() {
            expect(JSON.parse(response._getData())).to.be.a('object');
            done();
        });

        yelpApiCtrl.get_snippet_search(request, response);
    });
});
