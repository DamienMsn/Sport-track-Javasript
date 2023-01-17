var express = require('express');
var router = express.Router();
var activity_dao = require('sport-track-db').activity_dao;
var data_dao = require('sport-track-db').data_dao;
var db = require('sport-track-db').db;
var Activity = require('sport-track-db').Activity;
var Data = require('sport-track-db').Data;
var CalculDistance = require('sport-track-db').Dist;

router.post('/', function(req, res, next) {
    if (req.session.idUtilisateur === undefined) {
        res.render('connect');
    } else {
        
        var file = req.files.docpicker;
        var json = JSON.parse(file.data);
        var activite = json.activity;
        var datas = json.data;

        var act = new Activity();

        var c = new CalculDistance();
        var dist = c.calculDistanceTrajet(json);
        dist = Math.round((dist*1000) * 1000) / 1000

        act.init(activite.date, activite.description, 0 , dist , 0 , 200 , 100 , req.session.idUtilisateur);

        activity_dao.insert(act, function(err) {
            if (err) {
                res.render('error', {message: "Activite non insere // " + err});
            } else {

                var insere = false;
                act.setIdAct(this.lastID);


                var insertion = true;

                for (var i = 0; i < datas.length; i++) {
                    var d = new Data();
                    d.init(datas[i].time, datas[i].cardio_frequency ,datas[i].latitude, datas[i].longitude, datas[i].altitude, act.getIdAct());

                    data_dao.insert(d, function(err) {
                        if (err) {
                            res.render('error', {message: "Data non insere // " + err});
                        } else {
                            d.setId(this.lastID);
                        }
                    });
                }

                if (insertion) {
                    res.render('home');
                } else {
                    res.render('error', {message: "Erreur lors de l'insertion des données"});
                }
                

                var sql = "select MIN(cardio_frequence) as minCard from Data , Activite where idAct = unAct and idAct = '"+act.getIdAct()+"' and unUtilisateur = '"+req.session.idUtilisateur+"';";
                db.get(sql, function(err, rows) {
                    if (err) {
                        res.render('error', {message: "Erreur de recuperation de la frequence cardiaque minimale // " + err});
                    } else {
                        act.setFreqMin(rows.minCard);

                        var sql = "select MAX(cardio_frequence) as maxCard from Data , Activite where idAct = unAct and idAct = '"+act.getIdAct()+"' and unUtilisateur = '"+req.session.idUtilisateur+"';";
                        db.get(sql, function(err, rows) {
                            if (err) {
                                res.render('error', {message: "Erreur de recuperation de la frequence cardiaque maximal // " + err});
                            } else {
                                act.setFreqMax(rows.maxCard);

                                var sql = "select AVG(cardio_frequence) as moyCard from Data , Activite where idAct = unAct and idAct = '"+act.getIdAct()+"' and unUtilisateur = '"+req.session.idUtilisateur+"';";
                                db.get(sql, function(err, rows) {
                                    if (err) {
                                        res.render('error', {message: "Erreur de recuperation de la frequence cardiaque moyenne // " + err});
                                    } else {
                                        act.setFreqMoy(Math.round(rows.moyCard * 1000) / 1000);


                                        sql = "SELECT (strftime('%s', (SELECT temps FROM Data WHERE idData = (SELECT MAX(idData) FROM Data WHERE unAct = '"+act.getIdAct()+"'))) - strftime('%s', (SELECT temps FROM Data WHERE idData = (SELECT MIN(idData) FROM Data WHERE unAct = '"+act.getIdAct()+"')))) as duree;";
                                        db.get(sql, function(err, rows) {
                                            if (err) {
                                                res.render('error', {message: "Erreur de recuperation de la duree // " + err});
                                            } else {

                                                console.log(rows.duree);
                                                act.setDuree(Math.round((rows.duree/60) * 1000) / 1000);


                                                activity_dao.update(act.getIdAct(), act, function(err) {
                                                    if (err) {
                                                        res.render('error', {message: "Activite non mise a jour // " + err});
                                                    } else {
                                                        console.log("Activite mise a jour");
                                                        res.render('home');
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});

router.get('/', function(req, res, next) {
    res.render('upload');
});

module.exports = router;