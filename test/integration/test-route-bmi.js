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

exports.bmi_should_work_in_finnish_and_metric = function (done) {
    supertest(app)
    .get('/bmi?weight=70&height=2.0&lang=fi&unit=metric')
    .expect(200, {
        result: {
            bmi: 17.5,
            description: 'Lievä alipaino'
        }
    })
    .end(done);
};

exports.bmi_should_work_with_metric_in_english = function (done) {
    supertest(app)
    .get('/bmi?weight=70&height=2.0&lang=en&unit=metric')
    .expect(200, {
        result: {
            bmi: 17.5,
            description: 'Mild underweight'
        }
    })
    .end(done);
};

exports.bmi_should_work_with_imperial_in_english = function (done) {
    supertest(app)
    .get('/bmi?weight=66&height=51lang=en&unit=imperial')
    .expect(200, {
        result: {
            bmi: 17.83852364475202,
            description: 'Mild underweight'
        }
    })
    .end(done);
};