var express=require('express');
var path = require('path')
var app=express()
var router=require('./routers/index.js')
var userRouters=require('./routers/users.routers')
const host='127.0.0.1'
const port=3030;


app.use('./',userRouters)

app.listen(port,host,function(){
    console.log(`server is running at http://${host}:${port}`);
    console.log(`Magic happened on Port ${port}`);
    
    
})