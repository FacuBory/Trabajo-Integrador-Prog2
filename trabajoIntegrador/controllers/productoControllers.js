
let data = require('../database/models')
 
let productoControllers ={
    info: function(req, res) {
        res.render('product-add',{
          usuarioLogueado: "dfdgf"
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