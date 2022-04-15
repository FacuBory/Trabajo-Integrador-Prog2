
let data = require('../db/data')
 
let productoControllers ={
    info: function(req, res, next) {
        res.render('index',{listaProducto: data.productos[i]});
      }
}
module.exports=productoControllers