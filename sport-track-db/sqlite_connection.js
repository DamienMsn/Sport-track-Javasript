var sqlite3 = require("sqlite3");
var path = require('path');

this.Connection = function(){
    var db = new sqlite3.Database(path.join(__dirname, '/sport_track.db'));
    return db;
};

var db = this.Connection();
module.exports = db;
