
let data = require('../db/data');

const userController = {
profile: function(req, res, next) {
  console.log(data.usuario)
  res.render('profile',{
    usuarioLogueado:data.usuario,
    listaProducto : data.productos 
  });
},

userDeslogueado: function(req, res, next) {
  console.log(data.usuario)
  res.render('userDeslogueado',);
}


}
module.exports = userController;
