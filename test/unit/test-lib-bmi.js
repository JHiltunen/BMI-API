var assert = require('assert');
var bmi = require('../../lib/bmi');

// bmi.getIndex tests
exports.it_should_return_number = function (done) {
    var result = bmi.getIndex(30, 1.6, 'metric');
    assert.ok(result === 30/Math.pow(1.6, 2));
    return done();
};

exports.it_should_calculate_bmi_correct = function (done) {
    var result = bmi.getIndex(30, 1.6, 'metric');
    assert.ok(result === 30/Math.pow(1.6, 2));
    return done();
};

exports.it_should_calculate_imperial_bmi_correct = function (done) {
    var result = bmi.getIndex(118, 60);
    assert.ok(result === (118 * 703 / Math.pow(60, 2)));
    return done();
};

exports.it_should_reject_strings = function (done) {
    var result = bmi.getIndex('kg', 'cm');
    assert.ok(!result);
    return done();
};

// bmi.getDescription tests

exports.it_should_return_correct_string_in_finnish_depending_on_the_bmi = function (done) {
    var bmiUnder16 = bmi.getDescription(11.7, "fi");
    var bmiUnder16Border = bmi.getDescription(15.9, "fi");
    assert.ok(bmiUnder16 === 'Vaikea alipaino' && bmiUnder16Border === 'Vaikea alipaino');

    var bmiFrom16To17Border = bmi.getDescription(16.0, "fi");
    var bmiFrom16To17 = bmi.getDescription(16.5, "fi");
    assert.ok(bmiFrom16To17Border === 'Merkittävä alipaino' && bmiFrom16To17 === 'Merkittävä alipaino');

    var bmiFrom17To18AndAHalfBorder = bmi.getDescription(17.0, "fi");
    var bmiFrom17To18AndAHalf = bmi.getDescription(18.2, "fi");
    assert.ok(bmiFrom17To18AndAHalfBorder === 'Lievä alipaino' && bmiFrom17To18AndAHalf === 'Lievä alipaino');

    var bmiFrom25To30Border = bmi.getDescription(25, "fi");
    var bmiFrom25To30 = bmi.getDescription(28.7, "fi");
    assert.ok(bmiFrom25To30Border === 'Lievä lihavuus' && bmiFrom25To30 === 'Lievä lihavuus');

    var bmiFrom30To35Border = bmi.getDescription(30, "fi");
    var bmiFrom30To35 = bmi.getDescription(32.3, "fi");
    assert.ok(bmiFrom30To35Border === 'Merkittävä lihavuus' && bmiFrom30To35 === 'Merkittävä lihavuus');

    var bmiFrom35To40Border = bmi.getDescription(35, "fi");
    var bmiFrom35To40 = bmi.getDescription(36.4, "fi");
    assert.ok(bmiFrom35To40Border === 'Vaikea lihavuus' && bmiFrom35To40 === 'Vaikea lihavuus');

    var bmiOver40Border = bmi.getDescription(40, "fi");
    var bmiOver40 = bmi.getDescription(100, "fi");
    assert.ok(bmiOver40Border === 'Sairaalloinen lihavuus' && bmiOver40 === 'Sairaalloinen lihavuus');

    return done();
};

exports.it_should_return_correct_string_in_english_depending_on_the_bmi = function (done) {

    var bmiInEnglishUnder16 = bmi.getDescription(11.7, "en");
    var bmiInEnglishUnder16Border = bmi.getDescription(15.9, "en");
    assert.ok(bmiInEnglishUnder16 === 'Severe underweight' && bmiInEnglishUnder16Border === 'Severe underweight');

    var bmiInEnglishFrom16To17Border = bmi.getDescription(16.0, "en");
    var bmiInEnglishFrom16To17 = bmi.getDescription(16.5, "en");
    assert.ok(bmiInEnglishFrom16To17Border === 'Significant underweight' && bmiInEnglishFrom16To17 === 'Significant underweight');

    var bmiInEnglishFrom17To18AndAHalfBorder = bmi.getDescription(17.0, "en");
    var bmiInEnglishFrom17To18AndAHalf = bmi.getDescription(18.2, "en");
    assert.ok(bmiInEnglishFrom17To18AndAHalfBorder === 'Mild underweight' && bmiInEnglishFrom17To18AndAHalf === 'Mild underweight');

    var bmiInEnglishFrom18AndAHalfTo25Border = bmi.getDescription(18.5, "en");
    var bmiInEnglishFrom18AndAHalfTo25 = bmi.getDescription(22.56, "en");
    assert.ok(bmiInEnglishFrom18AndAHalfTo25Border === 'Normal weight' && bmiInEnglishFrom18AndAHalfTo25 === 'Normal weight');

    var bmiInEnglishFrom25To30Border = bmi.getDescription(25, "en");
    var bmiInEnglishFrom25To30 = bmi.getDescription(28.7, "en");
    assert.ok(bmiInEnglishFrom25To30Border === 'Slight obesity' && bmiInEnglishFrom25To30 === 'Slight obesity');

    var bmiInEnglishFrom30To35Border = bmi.getDescription(30, "en");
    var bmiInEnglishFrom30To35 = bmi.getDescription(32.3, "en");
    assert.ok(bmiInEnglishFrom30To35Border === 'Significant obesity' && bmiInEnglishFrom30To35 === 'Significant obesity');

    var bmiInEnglishFrom35To40Border = bmi.getDescription(35, "en");
    var bmiInEnglishFrom35To40 = bmi.getDescription(36.4, "en");
    assert.ok(bmiInEnglishFrom35To40Border === 'Severe obesity' && bmiInEnglishFrom35To40 === 'Severe obesity');
    
    var bmiInEnglishOver40Border = bmi.getDescription(40, "en");
    var bmInEnglishOver40 = bmi.getDescription(100, "en");
    assert.ok(bmiInEnglishOver40Border === 'Patient obesity' && bmInEnglishOver40 === 'Patient obesity');

    return done();
};