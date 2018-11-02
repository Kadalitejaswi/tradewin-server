var express=require('express');
var path=express()
var router=express.Router();  // constructor call
var homectrl=require('../controllers/home.controller')

router.route('/').get(homectrl.rootRequest)

router.route('/home').get(homectrl.homeRequest)

module.exports=router;