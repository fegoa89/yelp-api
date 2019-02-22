var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


var routes = require('./api/routes/yelpApiRoutes');
routes(app);


app.listen(port);

app.use(function(req, res) {
    res.status(404).send({
        error: req.originalUrl + ' not found'
    })
});

console.log('Yelp RESTful API server started on: ' + port);
