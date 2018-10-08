module.exports = {
    getIndex : function getIndex(weight, height, unit ='imperial') {
        switch(unit) {
            case 'metric':

            if(typeof(weight) === 'number' && typeof(height) === 'number') {
                return weight / (height * height);
            }
            break;
        case 'imperial':
            // length in inches

            // weight in pounds
            if(typeof(weight) === 'number' && typeof(height) === 'number') {
                console.log(weight * 703 / (height * height))
                return weight * 703 / (height * height);
            }
            break;
        }
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
    var descriptions = require('../weightDescriptions.json');
    
    return descriptions[lang][index];
}