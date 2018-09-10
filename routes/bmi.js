var bmi = require('../lib/bmi');
module.exports = function (req, res, next) {
    return res.json(
        {
            result: {
                bmi : bmi.getIndex(req.weight, req.height),
                description : bmi.getDescription(bmi.getIndex(req.weight, req.height))
            }
        }
    );
};