const urlParser = require('url');
const http = require('http');

const valid = function(url) {
    const urlObj = urlParser.parse(url)
    const options = {
        host : urlObj.host,
        path: urlObj.path,
        method: 'HEAD'
    }
    return new Promise(function(resolve, reject) {
        const req = http.request(options);
        req.end();
        req.on('error', (err) => {
            return reject(err)
        });
        req.once('response', (res) => {
            const {headers} = res
            if(headers['content-type']){
                return resolve(headers)
            }

            return reject('header has no content-type')
        });        
    });
};

module.exports = valid