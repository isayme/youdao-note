var request = require('request');

var Client = function(options) {
  this.baseUrl = options.baseUrl || 'http://note.youdao.com';
  this.access_token = options.access_token;
};

/*
 * options:
 *   method: request method
 *   params: request params
 */
Client.prototype.request = function(options, callback) {
  options.baseUrl = this.baseUrl;
  options.gzip = true;
  options.json = true;

  request(options, function(err, res, body) {
    if (err) {
      return callback(err);
    }
    // error occur
    if (res.statusCode === 500) {
      err = new Error(body.message);
      err.code = body.error;
      return callback(err);
    }
    callback(null, body);
  });
};

var extend = function(dest, source) {
  for (var key in source) {
    dest[key] = source[key];
  }
};

extend(Client.prototype, require('./user'));
extend(Client.prototype, require('./note'));
extend(Client.prototype, require('./notebook'));
extend(Client.prototype, require('./share'));
extend(Client.prototype, require('./attachment'));

module.exports = Client;
