var express=require('express');
var router=express.Router('../controllers/users.controllers');  // constructor call
var userCtrl=require('../controllers/users.controller');

router.route('/user').get(userCtrl.getUsers)

router.route('/data').get(userCtrl.showData)

module.exports=router;
