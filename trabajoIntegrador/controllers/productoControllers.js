
const db = require('../database/models');
let data = require('../database/models');
const Producto = require('../database/models/Producto');
let productoNuevo = db.Producto;

let productoControllers = {
  info: function (req, res) {
    res.render('product-add', {
      usuarioLogueado: "dfdgf"
    });
  },

  detalleProducto: function (req, res) {
    let idProducto = req.params.id
    return res.render('products', {
      detalleProducto: data.productos[idProducto],
      comentarios: data.comentarios

    })
  },
  create: (req, res) => {
    return res.render('product-add')
  },

  store: (req, res) => {
    let info = req.body
    let productoGuardado = {
      nombre: info.nombreProducto,
      imagen: info.fotoDeProducto,
      descripcion: info.descripcionProducto,
      marca: info.marcaProducto,
      condicion: info.condicionProducto,
      tipo_producto: info.tipoDeProducto,
      created_at: info.fechaCarga,
    }
    productoNuevo.create(productoGuardado)
      .then((result) => {
        return res.redirect("/")
      })

    }}

  

module.exports = productoControllers