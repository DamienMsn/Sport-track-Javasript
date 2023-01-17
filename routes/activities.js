var express = require('express');
var router = express.Router();
var activity_dao = require('sport-track-db').activity_dao;

var user_dao = require('../node_modules/sport-track-db/sport-track-db').user_dao;

router.post('/', function(req, res, next) {

    
});

router.get('/', function(req, res, next) {
    activity_dao.findByUser(req.session.idUtilisateur ,function(err, rows) {
        if(err != null){
            res.render('error', {message: err});
        }else {
            res.render('activities' , {data:rows});
        }
    });
});

module.exports = router;