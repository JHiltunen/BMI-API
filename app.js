var express = require('express');
var app = express();

app.use(function (req, res, next) {
    // TODO implementation of the app
});

// get API endpoint
app.get('/bmi', require('./routes/bmi'));

app.listen(3000, function() {
    console.log('App is now listening')
});