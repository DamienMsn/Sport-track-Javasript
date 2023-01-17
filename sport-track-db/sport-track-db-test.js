var user_dao = require('./sport-track-db').user_dao;
var db = require('./sport-track-db').db_connection;
var User = require('./sport-track-db').User;
var Activity = require('./sport-track-db').Activity;
var Data = require('./sport-track-db').Data;
var activity_dao = require('./sport-track-db').activity_dao;
var activity_entry_dao = require('./sport-track-db').data_dao;

//TEST USER DAO

var user1 = new User();

user1.init('pierre', 'Jean', '25/09/2003', 'M', 170, 55, 'r@gmail.com', '12345678');
//var user2 = ['jean', 'juan', '01/01/2000', 'F', 140, 70, 'martin@gmail.com', 'martinmartin'];

user_dao.insert(user1 ,function(err){
    if(err){
        console.log(err);
    }else{
        user1.setId(this.lastID);
        console.log(user1.getId());
    }});
    
/*
user_dao.insert(user2 ,function(err){
    if(err){
        console.log(err);
    }else{
        user2.setId(this.lastID)
        console.log(user2.getId());
    }});
/*
var userUpdate = ['Jackie', 'Jackie', '10/10/2000', 'M', 140, 70, 'michel@gmail.com', 'michelmichel'];
user_dao.update(1, userUpdate ,function(err){
    if(err){
        console.log(err);
    }else{
        console.log(null);
    }});

user_dao.delete(1 , function(err){
    if(err){
        console.log(err);
    }else{
        console.log(null);
    }});

user_dao.findAll(function(err, rows){
    if(err){
        console.log(err);
    }else{
        console.log(rows);
    }});

user_dao.findByKey(1, function(err, row){
    if(err){
        console.log(err);
    }else{
        console.log(null, row);
    }});
*/


//TEST ACTIVITY DAO

var act = new Activity();

act.init('11/02/2022','Match de foot', 90, 700, 95,105,100, user1.getId());
//var act2 = ['08/03/2022','Match de basket', 40, 500, 85,100,92, 1];

activity_dao.insert(act ,function(err){
    if(err){
        console.log(err);
    }else{
        act.setIdAct(this.lastID)
        console.log(act.getIdAct());
    }});

/*
activity_dao.insert(act2 ,function(err){
    if(err){
        console.log(err);
    }else{
        act2.setId(this.lastID)
        console.log(act2.getId());
    }});

var actUpdate = ['08/03/2022','Match de voley', 50, 500, 85,100,92, 1];
activity_dao.update(1, actUpdate ,function(err){
    if(err){
        console.log(err);
    }else{
        console.log(null);
    }});


activity_dao.delete(1 , function(err){
    if(err){
        console.log(err);
    }else{
        console.log(null);
    }});



activity_dao.findAll(function(err, rows){
    if(err){
        console.log(err);
    }else{
        console.log(rows);
    }});

activity_dao.findByKey(1, function(err, row){
    if(err){
        console.log(err);
    }else{
        console.log(null, row);
    }});
*/


//TEST ACTIVITY ENTRY DAO
var data = new Data();
data.init('13:00:25',95, 50, 100, 18, act.getIdAct());

//var data2 = ['13:00:30',100, 81.63, 109.705, 18,1];

activity_entry_dao.insert(data ,function(err){
    if(err){
        console.log(err);
    }else{
        data.setId(this.lastID)
        console.log(data.getId());
    }});

/*
activity_entry_dao.insert(data2 ,function(err){
    if(err){
        console.log(err);
    }else{
        data2.setId(this.lastID)
        console.log(data2.getId());
    }});

/*
var dataUpdate = ['13:00:35',100, 81.63, 109.705, 18,1];
activity_entry_dao.update(2, dataUpdate ,function(err){
    if(err){
        console.log(err);
    }else{
        console.log(null);
    }});


activity_entry_dao.delete(1 , function(err){
    if(err){
        console.log(err);
    }else{
        console.log(null);
    }});


activity_entry_dao.findAll(function(err, rows){
    if(err){
        console.log(err);
    }else{
        console.log(rows);
    }});


activity_entry_dao.findByKey(2, function(err, row){
    if(err){
        console.log(err);
    }else{
        console.log(null, row);
    }});
*/