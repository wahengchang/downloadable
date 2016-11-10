# downloadable

check if url downloadable before download.

[![NPM](https://nodei.co/npm/downloadable.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/downloadable)


## Install

```
$ npm install --save downloadable
```

## Test

```
$ mocha test.js
```


## Usage

```js
    ## Usage

    var downloadable = require("downloadable");

    downloadable(badLink).then(function(){
      // link is downloadable, do something ....
    },function(err){
      // link is not downloadable, do something else ....
    });

```


## License


[MIT](http://vjpr.mit-license.org)