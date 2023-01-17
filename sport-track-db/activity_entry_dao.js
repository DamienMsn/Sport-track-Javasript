var db = require('./sqlite_connection');
var Data = require('./data');

var ActivityEntryDAO = function(){

    this.insert = function(data, callback){
        var sql = "INSERT INTO Data (temps, cardio_frequence, latitude, longitude, altitude, unAct) VALUES ($temps, $cardio_frequence, $latitude, $longitude, $altitude, $unAct);";
        var values = [data.getTemps(),data.getCard() , data.getLatitude(), data.getLongitude(), data.getAltitude(), data.getUneAct()];
        db.run(sql, values, callback);
    };

    this.update = function(key, data, callback){
        var sql = "UPDATE Data SET temps=$temps, cardio_frequence=$cardio_frequence, latitude=$latitude, longitude=$longitude, altitude=$altidude, unAct=$unAct WHERE idData="+key+";";
        var values = [data.getTemps(),data.getCard() , data.getLatitude(), data.getLongitude(), data.getAltitude(), data.getUneAct()];
        db.run(sql, values, callback);
    };

    this.delete = function(key, callback){
        var sql = "DELETE FROM Data WHERE idData="+key+";";
        db.run(sql, callback);
    };

    this.findAll = function(callback){
        var sql = "SELECT * FROM Data;";
        db.all(sql, callback);
    };

    this.findByKey = function(key, callback){
        var sql = "SELECT * FROM Data WHERE idData="+key+";";
        db.get(sql, callback);
    };
};

var dao = new ActivityEntryDAO();
module.exports = dao;