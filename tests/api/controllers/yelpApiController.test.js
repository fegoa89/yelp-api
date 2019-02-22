var yelpApiCtrl = require('../../../api/controllers/yelpApiController')
  , http_mocks = require('node-mocks-http')
  , should = require('should')
  , nock = require('nock')


function buildResponse() {
  return http_mocks.createResponse({eventEmitter: require('events').EventEmitter})
}


it('location_suggest', function(done) {
	let locationSuggestResponse = require('../../mocks/location_suggest_response.json');
	nock('https://www.yelp.de')
		.get('/location_suggest/v2?prefix=undefined')
		.reply(200, locationSuggestResponse);

    var response = buildResponse()
    var request  = http_mocks.createRequest({
      method: 'GET',
      url: '/location_suggest/v2?prefix=undefined',
    })

    response.on('end', function() {
      //response._getData().should.eql(locationSuggestResponse)
      console.log(response._getData())
      done()
    })

	yelpApiCtrl.get_location_suggestions(request, response);
});
