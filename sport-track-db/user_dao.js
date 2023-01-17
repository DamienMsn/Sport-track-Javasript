var db = require('./sqlite_connection');
var User = require('./user');

var UserDAO = function(){

    this.insert = function(user, callback){
        var sql = "INSERT INTO Utilisateur (nom, prenom, date_naissance, sexe, taille, poids, email, mdp) VALUES ($nom,$prenom,$date_naissance,$sexe,$taille,$poids,$email,$mdp);";
        var values = [user.getNom(), user.getPrenom(), user.getDate_naissance(), user.getSexe(), user.getTaille(), user.getPoids(), user.getEmail(), user.getMDP()]
        db.run(sql, values, callback);
    };

    this.update = function(key, user, callback){
        var sql = "UPDATE Utilisateur SET nom=$nom, prenom=$prenom, date_naissance=$date_naissance, sexe=$sexe, taille=$taille, poids=$poids, email=$email, mdp=$mdp WHERE idUtilisateur="+key+";";
        var values = [user.getNom(), user.getPrenom(), user.getDate_naissance(), user.getSexe(), user.getTaille(), user.getPoids(), user.getEmail(), user.getMDP()]
        db.run(sql, values, callback);
    };

    this.delete = function(key, callback){
        var sql = "DELETE FROM Utilisateur WHERE idUtilisateur="+key+";";
        db.run(sql, callback);
    };

    this.findAll = function(callback){
        var sql = "SELECT * FROM Utilisateur;";
        db.all(sql, callback);
    };

    this.findByKey = function(key, callback){
        var sql = "SELECT * FROM Utilisateur WHERE idUtilisateur="+key+";";
        db.get(sql, callback);
    };

    this.nbMail = function(email, callback){
        var sql = "Select Count(*) as nbMail From Utilisateur Where email = '" + email + "';";

        db.get(sql,callback);
    };

    this.connect = function(email, mdp, callback){
        var sql = "Select * From Utilisateur Where email = '" + email + "' AND mdp = '" + mdp + "';";
        db.get(sql,callback);
    };
};

var dao = new UserDAO();
module.exports = dao;