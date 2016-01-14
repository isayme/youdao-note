var shareNote = function(path, callback) {
  var options = {
    method: 'POST',
    url: '/yws/open/share/publish.json',
    form: {
      access_token: this.access_token,
      path: path
    }
  };

  this.request(options, callback);
};

module.exports = {
  shareNote: shareNote
};
