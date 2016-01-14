var expect = require('chai').expect;
var YoudaoNote = require('../index');

var client = new YoudaoNote.Client({
  access_token: process.env.YOUDAO_NOTE_ACCESS_TOKEN
});

describe('USER', function() {
  it('shuold ok when request user info', function(done) {
    client.getUserInfo(function(err, user) {
      expect(user).to.have.property('user');
      done();
    });
  });
});
