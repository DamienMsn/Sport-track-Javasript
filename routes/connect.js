var express = require('express');
var router = express.Router();

var user_dao = require('../node_modules/sport-track-db/sport-track-db').user_dao;
var User = require('../node_modules/sport-track-db/sport-track-db').User;

router.post('/', function(req, res, next) {

    user_dao.connect(req.body.email, req.body.pass, function(err, rows){
        if (err){
            res.render('error', {message: err});

        }else{
            if(rows){
                req.session.idUtilisateur = rows.idUtilisateur;
                res.render('home');
            } else {
                res.render('error', {message: "erreur de connexion"});
            }
        }
    });
});

router.get('/', function(req, res, next) {
    res.render('connect');
});

module.exports = router;