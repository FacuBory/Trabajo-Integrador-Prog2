
let db = require('../database/models');
let user = db.Usuario;
const bcryptjs = require ('bcryptjs');

const userController = {
profile: function(req, res, next) {

  res.render('profile',{
    //usuarioLogueado:data.usuario,
    //listaProducto : data.productos
  });
},

userDeslogueado: function(req, res, next) {
 
  res.render('userDeslogueado',);
},
register: function(req, res, next) {
  res.render('register',);
},
procesarRegister: function (req,res,next){
  let info = req.body
  console.log(info.email);
  let passEncriptada = bcryptjs.hashSync (info.contrasenia,10);
  let usuarioParaGuardar = {
    nombre : info.usuario,
    apellido: "merlo",
    email : info.email,
    contraseña: passEncriptada,
    fechadeNacimiento: info.fechadeNacimiento,
    dni: info.dni,
    fotoDePerfil: "12e2wodsnv9aerv",
    seguidores:200,
    comentarios:450,
    productosSubidos:3,
    remember_token : "false",
    created_at: new Date (),
    updated_at: new Date()
  }
console.log(usuarioParaGuardar);
  user.create(usuarioParaGuardar)
  .then((result)=>{
    return res.redirect("/users/login")
  })
  res.send(usuarioParaGuardar)
},

login: function(req, res, next) {
  res.render('login',);
},

procesarLogin: function (req,res,next){
let info = req.body
return res.send (info.email)
//user.findOne({
  //where : [ email = info.email]//
//})//
},

editar: function(req,res){
  res.render('profile-edit',{
    //usuarioLogueado:data.usuario
  })
}


}
module.exports = userController;
