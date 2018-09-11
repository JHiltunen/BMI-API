var assert = require('assert');
var bmi = require('../../lib/bmi');

// bmi.getIndex tests
exports.it_should_return_number = function (done) {
    var result = bmi.getIndex(30, 1.6);
    assert.ok(result === 30/Math.pow(1.6, 2));
    return done();
};

exports.it_should_calculate_bmi_correct = function (done) {
    var result = bmi.getIndex(30, 1.6);
    assert.ok(result === 30/Math.pow(1.6, 2));
    return done();
};

exports.it_should_reject_strings = function (done) {
    var result = bmi.getIndex('kg', 'cm');
    assert.ok(result === null);
    return done();
};

// bmi.getDescription tests

exports.it_should_return_correct_string_depending_on_the_bmi = function (done) {
    var bmiUnder16 = bmi.getDescription(11.7);
    var bmiUnder16Border = bmi.getDescription(15.9);
    assert.ok(bmiUnder16 === 'Vaikea alipaino' && bmiUnder16Border === 'Vaikea alipaino');

    var bmiFrom16To17Border = bmi.getDescription(16.0);
    var bmiFrom16To17 = bmi.getDescription(16.5);

    assert.ok(bmiFrom16To17Border === 'Merkittävä alipaino' && bmiFrom16To17 === 'Merkittävä alipaino');

    var bmiFrom17To18AndAHalfBorder = bmi.getDescription(17.0);
    var bmiFrom17To18AndAHalf = bmi.getDescription(18.2);

    assert.ok(bmiFrom17To18AndAHalfBorder === 'Lievä alipaino' && bmiFrom17To18AndAHalf === 'Lievä alipaino');

    var bmiFrom18AndAHalfTo25Border = bmi.getDescription(18.5);
    var bmiFrom18AndAHalfTo25 = bmi.getDescription(22.56);

    assert.ok(bmiFrom18AndAHalfTo25Border === 'Normaali paino' && bmiFrom18AndAHalfTo25 === 'Normaali paino');

    var bmiFrom25To30Border = bmi.getDescription(25);
    var bmiFrom25To30 = bmi.getDescription(28.7);

    assert.ok(bmiFrom25To30Border === 'Lievä lihavuus' && bmiFrom25To30 === 'Lievä lihavuus');

    var bmiFrom30To35Border = bmi.getDescription(30);
    var bmiFrom30To35 = bmi.getDescription(32.3);

    assert.ok(bmiFrom30To35Border === 'Merkittävä lihavuus' && bmiFrom30To35 === 'Merkittävä lihavuus');

    var bmiFrom35To40Border = bmi.getDescription(35);
    var bmiFrom35To40 = bmi.getDescription(36.4);

    assert.ok(bmiFrom35To40Border === 'Vaikea lihavuus' && bmiFrom35To40 === 'Vaikea lihavuus');

    var bmiOver40Border = bmi.getDescription(40);
    var bmiOver40 = bmi.getDescription(100);

    assert.ok(bmiOver40Border === 'Sairaalloinen lihavuus' && bmiOver40 === 'Sairaalloinen lihavuus');

    return done();
};