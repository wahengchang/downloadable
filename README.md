# downloadable

Check if url downloadable before download. 
 - resolve a promise with the HTTP headers when given URL is downloadable (should have 'content-type' and 'content-length')
 - reject a promise with error message when given URL is not downloadable

[![NPM](https://nodei.co/npm/downloadable.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/downloadable)


## Install

```
$ npm install --save downloadable
```

## Test

```
$ npm test
```


## Usage

```js
    const downloadable = require("downloadable");
    const imageUrl = 'https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png'

    downloadable(imageUrl).then(function(headers){
      console.log(headers['content-type'])
      console.log(headers['content-length'])
      // link is downloadable, do something ....
    },function(err){
      // link is not downloadable, do something else ....
    });

```


## License


[MIT](http://vjpr.mit-license.org)