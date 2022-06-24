var express = require('express')
let db = require('../database/models');
let user = db.Usuario;
const bcryptjs = require('bcryptjs');
let seguidorNuevo = db.Seguidor;

const userController = {
  profile: function (req, res, next) {
    let id = req.params.id;

    db.Usuario.findByPk(id, {
      include: [{
        association: "usuarioProducto", include: [{ association: "productoComentarios" }]
      }, { association: "usuarioComentarios" }, {association:"usuarioSeguidor"}]
    })
      .then((result) => {
        res.render("profile", {
          usuarioLogueado: result
        });

      })

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
        }).catch((error) => {
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
          if (req.body.botonRecordame != undefined) {
            res.cookie('usuarioId', req.session.user.id, { maxAge: 1000 * 6 * 5 })
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

  editar: (req, res) => {
    let id = req.params.id

    db.Usuario.findByPk(id)
      .then((result) => {
        let perfilEdit = {
          id: id,
          email: result.email,
          nombre: result.nombre,
          apellido: result.apellido,
          usuario: result.usuario,
          contrasenia: "",
          fechaNacimiento: result.fechaNacimiento,
          dni: result.dni,
          fotoPerfil: result.fotoPerfil

        }
        return res.render("profile-edit", { user: perfilEdit })
      })
  },
  update: function (req, res) {
    let info = req.body;
    let id = req.params.id;
    let errors = {};
    let fotoDePerfil = req.file.filename;
    if (info.nombre == "") {
      errors.message = "Ingrese nombre";
      res.locals.errors = errors;
      return res.render('profile-edit')
    }
    else if (info.contrasenia == "") {
      errors.message = "Ingrese contraseña";
      res.locals.errors = errors;
      return res.render('profile-edit')
    }
    else {
      let hashedPassword = bcryptjs.hashSync(info.contrasenia, 10);
      user.update({
        nombre: info.nombre,
        apellido: info.apellido,
        usuario: info.usuario,
        contrasenia: hashedPassword,
        fechaNacimiento: info.nacimiento,
        fotoPerfil: fotoDePerfil,
        dni: info.dni,
      }, {
        where: [{ id: id }]
      }
      )
        .then(function (data) {
          res.locals.user.fotoPerfil = fotoDePerfil
          res.redirect('/')
        })
        .catch(function (error) {
          res.send(error);
        })
    }
  },

  logout: function (req, res) {
    req.session.destroy();
    res.clearCookie("usuarioId");
    return res.redirect("/")
  },
  follow: (req, res) => {
    let id = req.params.id;
    let errors = {};
    const { Op } = require("sequelize")
    let followNuevo = {
      idUsuarioSeguidor: res.locals.user.id,
      idUsuarioSeguido: id,
    }
    seguidorNuevo.findOne({
      where: {
        [Op.and]: [
          { idUsuarioSeguidor: res.locals.user.id },
          { idusuarioSeguido: id } 
        ]
      }
      
    }).then((result) => {
      if (result == null) {
        seguidorNuevo.create(followNuevo)
          .then((result) => {
            return res.redirect('/users/profile/' + id)
          })
      } else {
        errors.message = "Ya sigues a este usuario";
        res.locals.errors = errors;
        db.Usuario.findByPk(id, {
          include: [{
            association: "usuarioProducto", include: [{ association: "productoComentarios" }]
          }, { association: "usuarioComentarios" }, {association:"usuarioSeguidor"}]
        })
          .then((result) => {
            return res.render("profile", {
              usuarioLogueado: result
            });
          })
      }
    })


  },


}
module.exports = userController;
