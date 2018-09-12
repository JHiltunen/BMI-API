module.exports = {
    getIndex : function getIndex(weight, height) {
        if(typeof(weight) === 'number' && typeof(height) === 'number') {
            return weight / (height * height);
        }
        return null;
    },

    getDescription : function getDescription(index, lang) {
        if (index < 16) {
            return readDescription(lang, 0);
        } else if (index < 17) {
            return readDescription(lang, 1);
        } else if (index < 18.5) {
            return readDescription(lang, 2);
        } else if (index < 25.0) {
            return readDescription(lang, 3);
        } else if (index < 30.0) {
            return readDescription(lang, 4);
        } else if (index < 35) {
            return readDescription(lang, 5);
        } else if (index < 40) {
            return readDescription(lang, 6);
        } else {
            return readDescription(lang, 7);
        }
    }
};

function readDescription(lang, index) {
    const fs = require('fs');

    let rawdata = fs.readFileSync('weightDescriptions.json');
    let description = JSON.parse(rawdata);

    return description[lang][index];
}