var createNote = function(data, callback) {
  var options = {
    method: 'POST',
    url: '/yws/open/note/create.json',
    formData: {
      access_token: this.access_token,
      content: data.content,
      title: data.title,
      author: data.author,
      source: data.source,
      create_time: data.create_time,
      notebook: data.notebook
    }
  };

  this.request(options, callback);
};

var getNote = function(path, callback) {
  var options = {
    method: 'POST',
    url: '/yws/open/note/get.json',
    form: {
      access_token: this.access_token,
      path: path
    }
  };

  this.request(options, callback);
};

var updateNote = function(data, callback) {
  var options = {
    method: 'POST',
    url: '/yws/open/note/update.json',
    formData: {
      access_token: this.access_token,
      path: path,
      content: data.content,
      title: data.title,
      author: data.author,
      source: data.source,
      create_time: data.create_time,
      notebook: data.notebook
    }
  };

  this.request(options, callback);
};

var moveNote = function(path, notebook, callback) {
  var options = {
    method: 'POST',
    url: '/yws/open/note/move.json',
    form: {
      access_token: this.access_token,
      path: path,
      notebook: notebook
    }
  };

  this.request(options, callback);
};

var deleteNote = function(path, callback) {
  var options = {
    method: 'POST',
    url: '/yws/open/note/delete.json',
    form: {
      access_token: this.access_token,
      path: path
    }
  };

  this.request(options, callback);
};

module.exports = {
  createNote: createNote,
  getNote: getNote,
  updateNote: updateNote,
  moveNote: moveNote,
  deleteNote: deleteNote
};
