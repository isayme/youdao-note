var getUserInfo = function(callback) {
  var options = {
    method: 'GET',
    url: '/yws/open/user/get.json',
    qs: {
      access_token: this.access_token
    }
  };

  this.request(options, callback);
};

module.exports = {
  getUserInfo: getUserInfo
};
