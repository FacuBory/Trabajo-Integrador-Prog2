 var express = require('express');
 var router = express.router();
 const data = require('../db/data')
 const controlador = {
     show: function(req,res){
         res.render('index',{data: data.productos})
     }

 }