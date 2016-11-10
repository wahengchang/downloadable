var valid = require('url-valid');

module.exports = function(url) {
    return new Promise(function(resolve, reject) {
        valid(url, function(err, valid) {
            if (err) {
                reject(err);
            } else {
                if (valid) {
                    resolve();
                } else {
                    reject("linke is not downloadable");
                }
            }
        });
    });
};