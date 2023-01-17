var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {    
    req.session.idUtilisateur = -1;
    res.render('connect');
});

module.exports = router;