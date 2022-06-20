
const db = require('../database/models');

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
      detalleProducto: db.productos[idProducto],
      comentarios: db.comentarios

    })
  },
  show: function(req,res){
  let id = req.params.id
  db.Producto.findByPk(id)
  .then((result)=>{
    return res.render("products",{
      producto : result
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

    }}

  

module.exports = productoControllers