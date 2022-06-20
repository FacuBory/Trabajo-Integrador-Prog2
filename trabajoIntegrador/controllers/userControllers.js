var express = require('express')
let db = require('../database/models');
let user = db.Usuario;
const bcryptjs = require('bcryptjs');

const userController = {
  profile: function (req, res, next) {

    res.render('profile', {
      usuarioLogueado: db.usuario,
      listaProducto: db.productos
    });
  },

  userDeslogueado: function (req, res, next) {

    res.render('userDeslogueado',);
  },
  register: function (req, res, next) {
    res.render('register',);
  },
  procesarRegister: function (req, res, next) {
    let info = req.body

    let errors = {};
    if (info.nombre == "") {
      errors.message = "Ingrese nombre";
      res.locals.errors = errors;
      return res.render('register')
    }
    else if (info.email == "") {
      errors.message = "Ingrese email";
      res.locals.errors = errors;
      return res.render('register')
    }
    else if (info.contrasenia == "") {
      errors.message = "Ingrese contraseña";
      res.locals.errors = errors;
      return res.render('register')
    }
    else {
      let passEncriptada = bcryptjs.hashSync(info.contrasenia, 10);
      let fotoDePerfil = req.file.filename;
      let usuarioParaGuardar = {
        nombre: info.nombre,
        apellido: info.apellido,
        email: info.email,
        usuario: info.usuario,
        contrasenia: passEncriptada,
        fechaNacimiento: info.fechaNacimiento,
        dni: info.dni,
        fotoDePerfil: info.fotoDePerfil,
        seguidores: 200,
        comentarios: 450,
        productosSubidos: 3,
        remember_token: "false",
        created_at: new Date(),
        updated_at: new Date(),
        fotoPerfil: fotoDePerfil
      }

      user.create(usuarioParaGuardar)
        .then((result) => {
          return res.redirect("/users/login")
        }).catch((error)=>{
          if (error.errors[0].validatorKey == "not_unique") {
            errors.message = "Este mail esta en uso. Intente con otro o recuerde su contraseña"
            res.locals.errors = errors
            return res.render('register')
          } else {
            console.log(error)
            return res.render('register')
          }
        })

    }
  },

  login: function (req, res, next) {
    res.render('login',);
  },

  procesarLogin: function (req, res) {
    let info = req.body;
    let errors = {};
    user.findOne({
      where: [{ email: info.email }]
    }).then((result) => {
      if (result != null) {

        let claveCorrecta = bcryptjs.compareSync(info.password, result.contrasenia);
        if (claveCorrecta) {
          req.session.user = result.dataValues;
          if (req.body.botonrecordame != undefined) {
            res.cookies('usuarioId', req.session.user.id, { maxAge: 1000 * 6 * 5 })
          }
          return res.redirect('/')
        } else {
          errors.message = "La clave es incorrecta"
          res.locals.errors = errors
          return res.render('login')
        }

      } else {
        errors.message = "No existe el mail " + info.email
        res.locals.errors = errors
        return res.render('login')
      }
    });
  },

  editar: function (req, res) {
    res.render('profile-edit', {
      usuarioLogueado:db.usuario
    })
  },

  logout: function(req,res){
    req.session.destroy();
    res.clearCookie("usuarioId");
    return res.redirect("/")
  }


}
module.exports = userController;
