var getNoteBooks = function(callback) {
  var options = {
    method: 'POST',
    url: '/yws/open/notebook/all.json',
    form: {
      access_token: this.access_token
    }
  };

  this.request(options, callback);
};

var listNotes = function(notebook, callback) {
  var options = {
    method: 'POST',
    url: '/yws/open/notebook/list.json',
    form: {
      access_token: this.access_token,
      notebook: notebook
    }
  };

  this.request(options, callback);
};

var createNoteBook = function(name, callback) {
  var options = {
    method: 'POST',
    url: '/yws/open/notebook/create.json',
    form: {
      access_token: this.access_token,
      name: name
    }
  };

  this.request(options, callback);
};

var deleteNoteBook = function(notebook, callback) {
  var options = {
    method: 'POST',
    url: '/yws/open/notebook/delete.json',
    form: {
      access_token: this.access_token,
      notebook: notebook
    }
  };

  this.request(options, callback);
};

module.exports = {
  getNoteBooks: getNoteBooks,
  listNotes: listNotes,
  createNoteBook: createNoteBook,
  deleteNoteBook: deleteNoteBook
};
