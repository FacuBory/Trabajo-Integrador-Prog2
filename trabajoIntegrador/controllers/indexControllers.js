const db = require('../database/models');
const Producto = db.producto;

const { Op } = require("sequelize");

const indexController = {
  index: (req, res) => {

    /*let counter = req.session.contador;
    if (counter != undefined) {
      counter += 1
    } else {
      counter = 1;
    }

    req.session.contador = counter;
    console.log(counter)*/


    db.Producto.findAll({
      order: [['created_at', 'DESC']],
      include: [{ association: "productoComentarios" }]
    })
      .then((result) => {
        return res.render("index", {
          listaProductos: result,
          contador: req.session.contador
        })

      });

  },
  search: (req, res) => {
    let busqueda = req.query.search;
    db.Producto.findAll({
      where: [{
        [Op.or]: [
          {
            nombre:
            {
              [Op.like]: '%' + busqueda + '%'
            }
          },
          {
            descripcion:
            {
              [Op.like]: '%' + busqueda + '%'
            }
          },
        ]
      }]
    }
    )
      .then((result) => {
        console.log(result)
        return res.render("search-results", {
          listaProductos: result,
          contador: req.session.contador
        })

      }).catch((error) => {
        console.log(error)
      });

  }
}

module.exports = indexController;