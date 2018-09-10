module.exports = {
    getIndex : function getIndex(weight, height) {
        if(typeof(weight) === 'number' && typeof(height) === 'number') {
            return weight / (height * height);
        }
        return null;
    },

    getDescription : function getDescription(index) {
        if (index < 16) {
            return "Vaikea alipaino";
        } else if (index < 17) {
            return "Merkittävä alipaino";
        } else if (index < 18.5) {
            return "Lievä alipaino";
        } else if (index < 25.0) {
            return "Normaali paino";
        } else if (index < 30.0) {
            return "Lievä lihavuus";
        } else if (index < 35) {
            return "Merkittävä lihavuus";
        } else if (index < 40) {
            return "Vaikea lihavuus";
        } else {
            return "Sairaalloinen lihavuus";
        }
    }
};