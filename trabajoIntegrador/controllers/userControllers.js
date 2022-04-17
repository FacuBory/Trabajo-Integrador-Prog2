
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
},
register: function(req, res, next) {
  res.render('register',);
},
login: function(req, res, next) {
  res.render('login',);
},
editar: function(req,res){
  res.render('profile-edit',{
    usuarioLogueado:data.usuario
  })
}


}
module.exports = userController;
