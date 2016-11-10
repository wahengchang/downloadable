var should = require('should');
var downloadable = require('./index.js');

describe('Test downloadable', function() {
  var goodLink = 'https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png'
  var badLink = 'https://cdn1.iconfinder.com/data/icons/logotypes/32/squasdasdas2.png'

  it('goodLink', function(done) {
    downloadable(goodLink).then(function(){
      done();
    },function(err){
      done(err);
    });
  });

  it('badLink', function(done) {
    downloadable(badLink).then(function(){
      done('Error: bad link should not pass download-able');
    },function(err){
      done();
    });
  });

  it('one bad link, one good link', function(done) {
    var promises = [];
    promises.push(downloadable(badLink));
    promises.push(downloadable(goodLink));

    Promise.all(promises).then(function(){
      done('Error: one bad link, one good link should not pass download-able');
    },function(err){
      done();
    });
  });

  it('two good link', function(done) {
    var promises = [];
    promises.push(downloadable(goodLink));
    promises.push(downloadable(goodLink));

    Promise.all(promises).then(function(){
      done();
    },function(err){
      done(err);
    });
  });


  it('two bad link', function(done) {
    var promises = [];
    promises.push(downloadable(badLink));
    promises.push(downloadable(badLink));

    Promise.all(promises).then(function(){
      done('Error: one bad link, one good link should not pass download-able');
    },function(err){
      done();
    });
  });
});