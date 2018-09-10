var supertest = require('supertest');
var app = require('../../app');

exports.bmi_should_accept_numbers = function (done) {
    supertest(app)
    .get('/bmi?weight=70&height=2.0')
    .expect(200)
    .end(done);
};

exports.bmi_should_reject_strings = function (done) {
    supertest(app)
    .get('/bmi?weight=string&height=anotherString')
    .expect(400)
    .end(done);
};