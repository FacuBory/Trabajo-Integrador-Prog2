const db = require('../database/models');
const Producto = db.producto;


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
      order : [['created_at','DESC']],
      include : [{association:"productoComentarios"}]
    })
      .then((result) => {
        return res.render("index", {
          listaProductos: result,
          contador: req.session.contador
        })
        
      });
     
    },
  
}
  


module.exports = indexController;