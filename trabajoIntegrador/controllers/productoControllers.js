
const { localsName } = require('ejs');
const db = require('../database/models');

const Producto = require('../database/models/Producto');
let productoNuevo = db.Producto;
let comentarioNuevo = db.Comentarios;

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
      }, { association: "productoUsuario" }],
      order: [['productoComentarios','id', 'DESC']]
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
    let fotoDeProducto = req.file.filename;
    let productoGuardado = {
      nombre: info.nombreProducto,
      img: fotoDeProducto,
      descripcion: info.descripcionProducto,
      marca: info.marcaProducto,
      condicion: info.condicionProducto,
      tipo_producto: info.tipoDeProducto,
      created_at: new Date(),
      idUsuario : res.locals.user.id 
    }
    productoNuevo.create(productoGuardado)
      .then((result) => {
        return res.redirect("/")
      })

  },
  comment: (req, res) => {
    let id = req.params.id;
    let info = req.body
    if (res.locals.user == undefined) {
      return res.redirect('/users/login')
    } else {
      let commentNuevo = {
        idUsuarioComentador: res.locals.user.id,
        idProductoComentado: id,
        texto: info.inputComment
      }
      comentarioNuevo.create(commentNuevo)
        .then((result) => {
          return res.redirect('/product/detalle/' + id)
        })
    }
  },
  edit:(req,res)=>{
   let id = req.params.id
   db.Producto.findByPk(id)
   .then((result)=>{
    let productoEdit = {
      id: result.id,
      nombre: result.nombre,
      img: result.img,
      descripcion: result.descripcion,
      marca: result.marca,
      condicion: result.condicion,
      tipo_producto: result.tipo_producto,
      
    }
    return res.render("product-edit",{Producto:productoEdit})
    })
  },
  update:(req,res)=>{
  let info = req.body
  let id = req.params.id
  let fotoDeProducto = req.file.filename;
  db.Producto.update(
    {
      nombre: info.nombre,
      img: fotoDeProducto,
      descripcion: info.descripcion,
      marca: info.marca,
      condicion: info.condicion,
      tipo_producto: info.tipo_producto,
      update_at: new Date()
    },
    {
      where:[
        {id:id}
      ]
    }
  )
  .then((result)=>{
    return res.redirect("/product/detalle/"+ id)
  })


  },
  delete: (req, res) => {
    let productoABorrar = req.params.id;
    comentarioNuevo.destroy({
      where: [{ idProductoComentado: productoABorrar }]
    }).then((result) => {
      productoNuevo.destroy({
        where: [{ id: productoABorrar }]
      })
        .then((result) => {
          return res.redirect('/')
        })
    })
  }
}

module.exports = productoControllers