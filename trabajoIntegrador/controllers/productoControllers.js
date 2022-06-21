
const db = require('../database/models');

const Producto = require('../database/models/Producto');
let productoNuevo = db.Producto;

let productoControllers = {
  info: function (req, res) {
    res.render('product-add', {
      usuarioLogueado: "dfdgf"
    });
  },


  show: function (req, res) {
    let id = req.params.id;
    db.Producto.findByPk(id, {
      include: [{
        association: "productoComentarios",
        include: [{
          association: "comentarioUsuario"
        }]
      }]
    })
      .then((result) => {
        return res.render("products", {
          detalleProducto: result
        });
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

  }
}



module.exports = productoControllers