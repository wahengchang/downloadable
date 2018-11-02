var downloadable = require('../index.js');

describe('Test downloadable', function() {
  const imageUrl = 'https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png'
  const htmlUrl = 'https://www.google.com/'
  const mp3Url = 'http://www.hyperion-records.co.uk/audiotest/18%20MacCunn%20The%20Lay%20of%20the%20Last%20Minstrel%20-%20Part%202%20Final%20chorus%20O%20Caledonia!%20stern%20and%20wild.MP3'

  const badLink = 'https://notexisted/abc.png'

  it('imageUrl', function(done) {
    downloadable(imageUrl).then(function(header){
      expect(typeof header['content-type']).toBe('string')
      expect(typeof header['content-length']).toBe('string')
      done();
    },function(err){
      done(err);
    });
  });

  it('htmlUrl', function(done) {
    downloadable(htmlUrl).then(function(header){
      expect(typeof header['content-type']).toBe('string')
      done();
    },function(err){
      done(err);
    });
  });


  it('mp3Url', function(done) {
    downloadable(mp3Url).then(function(header){
      expect(header['content-type']).toBe('audio/mpeg')
      expect(typeof header['content-length']).toBe('string')
      done();
    },function(err){
      done(err);
    });
  });

  it('badLink', function(done) {
    downloadable(badLink).then(function(header){
      console.log(header)
      done('Error: bad link should not pass download-able');
    },function(err){
      console.log(err)
      done();
    });
  });
});