
let data = require('../db/data')
 
let productoControllers ={
    info: function(req, res) {
        res.render('product-add',{});
      },

    detalleProducto: function (req, res){
        let idProducto = req.params.id
        return res.render('products',{
          producto: data.productos[idProducto],
          comentarios: data.comentarios
        })
}}

module.exports=productoControllers