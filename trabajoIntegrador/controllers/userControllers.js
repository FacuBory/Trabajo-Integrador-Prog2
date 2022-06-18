var express = require('express')
let db = require('../database/models');
let user = db.Usuario;
const bcryptjs = require('bcryptjs');

const userController = {
  profile: function (req, res, next) {

    res.render('profile', {
      usuarioLogueado: data.usuario,
      listaProducto: data.productos
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
    console.log(info.email);
    let passEncriptada = bcryptjs.hashSync(info.contrasenia, 10);
    let fotoDePerfil = req.file.filename;
    let usuarioParaGuardar = {
      nombre: info.nombre,
      apellido: info.apellido,
      email: info.email,
      usuario: info.usuario,
      contrasenia: passEncriptada,
      fechadeNacimiento: info.fechaNacimiento,
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
      })

  },

  login: function (req, res, next) {
    res.render('login',);
  },

  procesarLogin: function (req, res) {
    let info = req.body
    user.findOne({
      where: [email = info.email]
    })
    .then((result) => {
        if (result != null) {
          let claveCorrecta = bcryptjs.compareSync(info.password, result.password)
          if (claveCorrecta) {
            return res.send("hola")
          } else {
            return res.send("Existe el mail " + result.email + " pero la clave es incorrecta")
          }

        } else {
          return res.send("No existe el mail " + info.email)
        }
    });
  },

  editar: function (req, res) {
    res.render('profile-edit', {
      //usuarioLogueado:data.usuario
    })
  }


}
module.exports = userController;
