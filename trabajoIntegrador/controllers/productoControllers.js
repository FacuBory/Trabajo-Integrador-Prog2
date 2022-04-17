
let data = require('../db/data')
 
let productoControllers ={
    info: function(req, res) {
        res.render('product-add',{
          usuarioLogueado: data.usuario
        });
      },

    detalleProducto: function (req, res){
      let idProducto = req.params.id
        return res.render('products',{
          detalleProducto: data.productos[idProducto],
          comentarios: data.comentarios
          
        })
}}

module.exports=productoControllers