var express = require('express');
var app = express();

app.use(function (req, res, next) {
    var weight = parseInt(req.query.weight),
    height = parseInt(req.query.height);

    if (!weight || !height || isNaN(weight) || isNaN(height)) {
        return res.status(400).end("You must specify your weight in kilos and height in meters as a query parameters");
    }

    req.weight = weight;
    req.height = height;

    return next();
});

// get API endpoint
app.get('/bmi', require('./routes/bmi'));

app.listen(3000, function() {
    console.log('App is now listening')
});

module.exports = app;