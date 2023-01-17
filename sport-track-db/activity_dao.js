var db = require('./sqlite_connection');
var Activity = require('./activity')

var ActivityDAO = function(){

    this.insert = function(act, callback){
        var sql = "INSERT INTO Activite (date, description, duree, distance_parcourue, cardio_freq_min, cardio_freq_max, cardio_freq_moy, unUtilisateur) VALUES ($date, $description, $duree, $distance_parcourue, $cardio_freq_min, $cardio_freq_max, $cardio_freq_moy, $unUtilisateur);";
        var values = [act.getDate(), act.getDescription(), act.getDuree(), act.getDistParcourue(), act.getFreqMin(), act.getFreqMax(), act.getFreqMoy(), act.getUnUtilisateur()];
        db.run(sql, values, callback);
    };

    this.update = function(key, act, callback){
        var sql = "UPDATE Activite SET date=$date, description=$description, duree=$duree, distance_parcourue=$distance_parcourue, cardio_freq_min=$cardio_freq_min, cardio_freq_max=$cardio_freq_max, cardio_freq_moy=$cardio_freq_moy, unUtilisateur=$unUtilisateur WHERE idAct="+key+";";
        var values = [act.getDate(), act.getDescription(), act.getDuree(), act.getDistParcourue(), act.getFreqMin(), act.getFreqMax(), act.getFreqMoy(), act.getUnUtilisateur()];
        db.run(sql, values, callback);
    };

    this.delete = function(key, callback){
        var sql = "DELETE FROM Activite WHERE idAct="+key+";";
        db.run(sql, callback);
    };

    this.findAll = function(callback){
        var sql = "SELECT * FROM Activite;";
        db.all(sql, callback);
    };

    this.findByKey = function(key, callback){
        var sql = "SELECT * FROM Activite WHERE idAct="+key+";";
        db.get(sql, callback);
    };

    this.findByUser = function(key, callback){
        var sql = "SELECT * FROM Activite, Utilisateur WHERE idUtilisateur = unUtilisateur And unUtilisateur="+key+";";
        db.all(sql, callback);
    }
};

var dao = new ActivityDAO();
module.exports = dao;