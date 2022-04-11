 var express = require('express');
 var router = express.Router();
 const data = require('../db/data');
 const indexController = {
     index: function(req,res){
       return res.render('index',{listaProducto: data.productos,
        usuarioLogueado: data.usuario})
     },
     

 }

module.exports = indexController;