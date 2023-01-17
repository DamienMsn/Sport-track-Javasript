var express = require('express');
var router = express.Router();

var user_dao = require('../node_modules/sport-track-db/sport-track-db').user_dao;
var User = require('../node_modules/sport-track-db/sport-track-db').User;

router.post('/', function(req, res, next) {

    util = new User();
    util.init(req.body.nom, req.body.prenom, req.body.date_naissance, req.body.sexe, req.body.taille, req.body.poids, req.body.email, req.body.pass);

    user_dao.update(req.session.idUtilisateur,util, function(err){
        if (err) {
            res.render('error', {message: err});
        }else{
            res.render('home');
        }
    });
});

router.get('/', function(req, res, next) {
    user_dao.findAll(function(err, rows) {
        if(err != null){
            console.log("ERROR= " +err);
        }else {
            res.render('modify_user', {data:rows});
        }
    });
    
});

module.exports = router;