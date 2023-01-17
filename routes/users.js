var express = require('express');
var router = express.Router();

var user_dao = require('../node_modules/sport-track-db/sport-track-db').user_dao;
var User = require('../node_modules/sport-track-db/sport-track-db').User;

router.post('/', function(req, res, next) {

    util = new User();
    util.init(req.body.nom, req.body.prenom, req.body.date_naissance, req.body.sexe, req.body.taille, req.body.poids, req.body.email, req.body.pass);

    user_dao.nbMail(req.body.email, function(err, rows){
        if (err!=null){
            res.render('error', {message: err});

        }else{
            if(rows.nbMail == 0){
                user_dao.insert(util, function(err){
                    if (err) {
                        res.render('error', {message: err});
                    }else{
                        res.render('connect');
                    }
                });
            } else {
                res.render('error', {message: "Email déjà utilisé"});
            }
        }
    });
});

router.get('/', function(req, res, next) {
    res.render('users');
});

module.exports = router;