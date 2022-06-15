 var express = require('express');
 var router = express.Router();
 const data = require('../database/models');
 const indexController = {
     index: function(req,res){
       return res.render('index',{listaProducto: data.productos,
        usuarioLogueado: data.usuario})
     },
     

 }

module.exports = indexController;