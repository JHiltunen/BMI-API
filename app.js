var express = require('express');
var app = express();

app.use(function (req, res, next) {
    var weight = parseInt(req.query.weight),
        height = parseInt(req.query.height),
        lang = req.query.lang,
        unit = req.query.unit;
    
    if (!weight || !height || isNaN(weight) || isNaN(height)) {
        return res.status(400).json({ error: "invalid parameter or parameter missing" });
    }

    if (!lang) {
        req.lang = "en";
    } else {
        req.lang = lang;
    }

    req.unit = unit;

    req.weight = weight;
    req.height = height;

    return next();
});

// get API endpoint
app.get('/bmi', require('./routes/bmi'));

app.listen(3000, function () {
    console.log('App is now listening')
});

module.exports = app;